<script lang="ts">
  import RequiredMark from './RequiredMark.svelte';

  let about: string = '';
  let 説明文: string = '';
  let username: string = '';
  let email: string = '';

  export let aboutThis;
  
  if (aboutThis === 'book') {
    about = '部誌';
    説明文 = '天文部の部誌「The Scientific Seiko」';
  } else if (aboutThis === 'planetarium') {
    about = 'プラネタリウム';
    説明文 = '天文部のプラネタリウム';
  }
</script>

<div>
  <h2>{about}についてのアンケート</h2>
  <p>{説明文}について，ご意見をお聞かせください．</p>
  <p>「<RequiredMark />」がついている項目は，回答必須です．</p><br>

  <form>
    <fieldset>
      <legend>あなたについて</legend>
      <label for='name'>お名前</label><br>
      <input bind:value={username} id='name' type='text' placeholder='ニックネーム可' /><br>
      <label for='email'>メールアドレス</label><br>
      <input type='email' id='email' placeholder='user@example.com' bind:value={email} />
    </fieldset>
    {#if aboutThis === 'book'}
      <fieldset>
        <legend>部誌について</legend>
        <p><RequiredMark />以下の中から，お読みになった，または現在お読みになっている部誌を全て選んでください．</p>
        <input type="checkbox" id="ver1" name="ver" value="本篇・上巻">
        <label for="ver1">本篇・上巻</label><br>
        <input type="checkbox" id="ver2" name="ver" value="本編・下巻">
        <label for="ver2">本篇・下巻</label><br>
        <input type="checkbox" id="ver3" name="ver" value="javascript">
        <label for="ver3">活動報告</label><br><br>

        <p><RequiredMark />既にお読みになっている部誌について，評価を教えてください．</p>
      </fieldset>
    {:else if aboutThis === 'planetarium'}

    {/if}
  </form>
</div>

<style lang='scss'>
  input {
    margin-bottom: 1em;
  }
</style>