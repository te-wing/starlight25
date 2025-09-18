<script lang="js">
  import { ref, onValue, set, runTransaction } from "firebase/database";
  import { database } from "../../../firebase/client";

  let slots = {};

  // DBから時間枠を購読
  const slotsRef = ref(database, "reservations");
  onValue(slotsRef, (snapshot) => {
    slots = snapshot.val() || {};
  });

  let newTime = "";

  function addSlot() {
    if (!newTime) return;
    const slotRef = ref(database, `reservations/${newTime}`);
    set(slotRef, { count: 0 });
    newTime = "";
  }

  function deleteSlot(time) {
    const slotRef = ref(database, `reservations/${time}`);
    set(slotRef, null);
  }

  function updateCount(time, delta) {
    const countRef = ref(database, `reservations/${time}/count`);
    runTransaction(countRef, (current) => {
      return Math.max(0, (current || 0) + delta); // マイナス防止
    });
  }
</script>

<div>
  <table>
    <thead>
      <tr>
        <th>時間</th>
        <th colspan="3">予約数</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      {#each Object.keys(slots).sort() as time}
        <tr>
          <td>{time}</td>
          <td>
            <button on:click={() => updateCount(time, -1)}>ー</button>
          </td>
          <td>{slots[time]?.count ?? 0}</td>
          <td>
            <button on:click={() => updateCount(time, +1)}>＋</button>
          </td>
          <td>
            <button on:click={() => deleteSlot(time)}>削除</button>
          </td>
        </tr>
      {/each}
      <tr>
        <td colspan="4">
          <input
            placeholder="例：09:00"
            bind:value={newTime}
          />
        </td>
        <td>
          <button on:click={addSlot}>追加</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>