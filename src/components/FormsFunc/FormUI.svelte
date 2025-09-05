<script lang="ts">
  import RequiredMark from './RequiredMark.svelte';

  let about: string = '';
  let 説明文: string = '';
  let username: string = '';
  let email: string = '';
  let comment: string = '';

  export let aboutThis;
  
  if (aboutThis === 'book') {
    about = '部誌';
    説明文 = '天文部の部誌「The Scientific Seiko」';
  } else if (aboutThis === 'planetarium') {
    about = 'プラネタリウム';
    説明文 = '天文部のプラネタリウム';
  }

  function handleSubmit() {
    event?.preventDefault();
    alert('送信中');
  }
</script>

<div>
  <h2>{about}についてのアンケート</h2>
  <p>{説明文}について，ご意見をお聞かせください．</p>
  <p>「<RequiredMark />」がついている項目は，回答必須です．</p><br>

  <form on:submit={handleSubmit}>
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
      </fieldset>
    {:else if aboutThis === 'planetarium'}

    {/if}
    <fieldset>
      <legend>評価とコメント</legend>
      <label for='comment'>フィードバック・コメントなどをお書きください．</label><br>
      <textarea placeholder='ここにコメントを入力' id='comment' bind:value={comment}></textarea>
    </fieldset>
    <button type='submit'>送信</button>
  </form>
</div>

<style lang='scss'>
  input {
    margin-bottom: 1em;
  }
  
  fieldset {
    padding: 4px 11px;
  }

  textarea {
    width: 100%;
    box-sizing: border-box;
    height: 7em;
  }
</style>