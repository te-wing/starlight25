<script lang="ts">
  import RequiredMark from './RequiredMark.svelte';

  type IntegerFrom0To5 = 0 | 1 | 2 | 3 | 4 | 5;

  let about: string = '';
  let 説明文: string = '';
  let other: string = '';

  let username: string = '';
  let email: string = '';
  let comment: string = '';
  let rate: IntegerFrom0To5 = 0;
  let length: string = '';

  export let aboutThis;
  
  if (aboutThis === 'book') {
    about = '部誌';
    other = 'プラネタリウム';
    説明文 = '天文部の部誌「The Scientific Seiko」';
  } else if (aboutThis === 'planetarium') {
    about = 'プラネタリウム';
    other = '部誌';
    説明文 = '天文部のプラネタリウム';
  }

  function handleSubmit() {
    event?.preventDefault();
    alert('送信中');
  }
</script>

<div>
  <p class='linkToOther'>
    {other}のアンケートは
    {#if (about === '部誌')}
      <a href='/form/planetarium'>こちら</a>
    {:else if (about === 'プラネタリウム')}
      <a href='/form/'>こちら</a>
    {:else}
      <a href='/error'>エラー</a>
    {/if}
  </p>
  <h2>{about}についてのアンケート</h2>
  <p>{説明文}について，ご意見をお聞かせください．</p>
  <p>「<RequiredMark />」がついている項目は回答必須，その他の項目は任意です．</p>

  <form on:submit={handleSubmit}>
    <fieldset>
      <legend>あなたについて</legend>
      <label for='name'>お名前</label><br>
      <input class='text' bind:value={username} id='name' type='text' placeholder='ニックネーム可' /><br>
      <label for='email'>メールアドレス</label><br>
      <input class='text' type='email' id='email' placeholder='user@example.com' bind:value={email} />
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
      <fieldset>
        <legend>プラネタリウムについて</legend>
        <label for='length'>プラネタリウムの時間（約10分）はいかがでしたか？</label><br>
        <select id='name' bind:value={length}>
          <option value=''>選択してください</option>
          <option value='too-short'>短すぎる</option>
          <option value='short'>少し短い</option>
          <option value='good'>丁度良い</option>
          <option value='long'>少し長い</option>
          <option value='too-long'>長すぎる</option>
        </select>
      </fieldset>
    {:else}
      <a href='/error'>エラー</a>
    {/if}
    <fieldset>
      <legend>評価とコメント</legend>


      <label for='comment'>ご意見・コメントなどをお書きください．</label><br>
      <textarea placeholder='ここにコメントを入力' id='comment' bind:value={comment}></textarea>
    </fieldset>
    <button type='submit'>送信</button>
  </form>
</div>

<style lang='scss'>
  input {
    margin-bottom: 1em;
  }

  .text {
    width: 100%;
    box-sizing: border-box;
    max-width: 240px;
    height: 3em;
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