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
  {#each Object.keys(slots).sort() as time}
    <div>
      <span>{time}</span>
      <button
        on:click={() => deleteSlot(time)}
      >
        削除
      </button>
    </div>
  {/each}

  <div>
    <input
      placeholder='例：09:00'
      bind:value={newTime}
    />
    <button
      on:click={addSlot}
    >
      ＋追加
    </button>
  </div>
</div>
