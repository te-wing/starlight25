<script lang="ts">
  import { db } from '../../../firebase/client.ts';
  import { ref, onValue } from 'firebase/database';
  import { writable } from 'svelte/store';
  import type { Unsubscriber } from 'svelte/store';


</script>

<div>
  <a href='/admin/ticket/addTime'>時間帯を追加</a>
</div>