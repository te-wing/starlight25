<script lang="ts">
  import RequiredMark from './RequiredMark.svelte';

  let about: string = '';
  let username: string = '';
  let email: string = '';

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
  <p>「<RequiredMark />」がついている項目は，回答必須です．</p><br>

  <form>
    <label for='name'>お名前</label>
    <input bind:value={username} id='name' type='text' placeholder='ニックネーム可' /><br><br>
    <label for='email'>メールアドレス</label>
    <input type='email' id='email' placeholder='user@example.com' bind:value={email} /><br><br>
    
  </form>
</div>

<style lang='scss'>

</style>