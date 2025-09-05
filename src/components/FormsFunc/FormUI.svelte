<script lang="ts">
  import RequiredMark from './RequiredMark.svelte';

  let about: string = 'undefined';

  export let aboutThis;
  
  if (aboutThis === 'book') {
    about = '部誌';
  } else if (aboutThis === 'planetarium') {
    about = 'プラネタリウム';
  }
</script>

<div>
  <h2>{about}についてのアンケート</h2>
  <p>天文部の部誌「The Scientific Seiko」について，ご意見をお聞かせください．</p>
  <p>「<RequiredMark />」がついている項目は，回答必須です．</p>

  <form>
    <label for='username'>お名前</label>
    <input name='username' id='username' type='text' placeholder='ニックネームも可' />
  </form>
</div>

<style lang='scss'>

</style>