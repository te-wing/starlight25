<script>
  import { ref, onValue, set } from "firebase/database";
  import { database } from "../../../firebase/client";
  import { v4 as uuidv4 } from "uuid"; // 時間キー用にユニークIDもあり

  let slots = {};

  // Realtime Databaseから時間枠を取得
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
</script>

<div>
  <table>
    <thead></thead>
    <tbody>
      {#each Object.keys(slots).sort() as time}
        <tr>
          <td>{time}</td>
          <td>
            <button>
              ー
            </button>
          </td>
          <td>人数</td>
          <td>
            <button>
              ＋
            </button>
          </td>
          <td>
            <button
              on:click={() => deleteSlot(time)}
            >
            削除
          </button>
          </td>
        </tr>
      {/each}
      <tr>
        <td>
          <input
            placeholder='例：09:00'
            bind:value={newTime}
          />
        </td>
        <td>
          <button
            on:clicl={addSlot}
          >
            追加
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
