<script lang="ts">
  import RequiredMark from './RequiredMark.svelte';
  import Star from './Star.svelte';
  import { Turnstile } from 'svelte-turnstile';

  type IntegerFrom0To5 = 0 | 1 | 2 | 3 | 4 | 5;

  let about: string = '';
  let 説明文: string = '';
  let other: string = '';

  let username: string = '';
  let email: string = '';
  let comment: string = '';
  let rate: IntegerFrom0To5 = 0;
  let length: string = '';
  let alreadyRead: string[] = [];

  export let aboutThis: string;
  
  if (aboutThis === 'book') {
    about = '部誌';
    other = 'プラネタリウム';
    説明文 = '天文部の部誌「The Scientific Seiko」';
  } else if (aboutThis === 'planetarium') {
    about = 'プラネタリウム';
    other = '部誌';
    説明文 = '天文部のプラネタリウム';
  }

  async function handleSubmit(event: Event) {
    event?.preventDefault();

    // フォームの要素を取得し、FormDataオブジェクトを生成
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // aboutの値をFormDataに追加 (サーバー側で必要)
    formData.append('about', aboutThis);

    try {
      // fetch APIを使ってサーバーにPOSTリクエストを送信
      const response = await fetch('https://form.starlight25.wing.osaka', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
      } else {
        alert(`送信失敗: ${result.error}`);
      }
    } catch (e) {
      alert('通信エラーが発生しました。');
      console.error('Error:', e);
    }
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
      <input class='emailarea' type='email' id='email' placeholder='user@example.com' bind:value={email} />
    </fieldset>
    <fieldset>
      <legend>{about}について</legend>
      {#if (aboutThis === 'book')}
        <p><RequiredMark />以下の中から，お読みになった，または現在お読みになっている部誌を全て選んでください．</p>
        <input type="checkbox" id="ver1" name="ver" value="本篇・上巻" bind:group={alreadyRead}>
        <label for="ver1">本篇・上巻</label><br>
        <input type="checkbox" id="ver2" name="ver" value="本編・下巻" bind:group={alreadyRead}>
        <label for="ver2">本篇・下巻</label><br>
        <input type="checkbox" id="ver3" name="ver" value="活動報告" bind:group={alreadyRead}>
        <label for="ver3">活動報告</label><br><br>
      {:else if (aboutThis === 'planetarium')}
        <label for='length'><RequiredMark />プラネタリウムの時間（約10分）はいかがでしたか？</label><br>
        <select id='name' bind:value={length}>
          <option value=''>選択してください</option>
          <option value='too-short'>短すぎる</option>
          <option value='short'>少し短い</option>
          <option value='good'>ちょうど良い</option>
          <option value='long'>少し長い</option>
          <option value='too-long'>長すぎる</option>
        </select>
      {:else}
        <a href='/error'>エラー</a>
      {/if}
      <br>
      <p><RequiredMark />{about}の内容はいかがでしたか？</p>
      <label>
        <input bind:group={rate} type='radio' name='rate' value={1} />
        <Star currentRate={rate} rateStar={1} />
      </label>
      <label>
        <input bind:group={rate} type='radio' name='rate' value={2} />
        <Star currentRate={rate} rateStar={2} />
      </label>
      <label>
        <input bind:group={rate} type='radio' name='rate' value={3} />
        <Star currentRate={rate} rateStar={3} />
      </label>
      <label>
        <input bind:group={rate} type='radio' name='rate' value={4} />
        <Star currentRate={rate} rateStar={4} />
      </label>
      <label>
        <input bind:group={rate} type='radio' name='rate' value={5} />
        <Star currentRate={rate} rateStar={5} />
      </label>
    </fieldset>
    <fieldset>
      <legend>コメント</legend>
      <label for='comment'>ご意見・コメントなどをお書きください．</label><br>
      <textarea placeholder='ここにコメントを入力' id='comment' bind:value={comment}></textarea>
    </fieldset>
    <Turnstile siteKey='0x4AAAAAABycHtFvIrRAAG4r'/>
    <button type='submit'>送信</button>
  </form>
  <div>
    <h4>DEV 変数一覧</h4>
    <p>username {username}</p>
    <p>email {email}</p>
    <p>comment {comment}</p>
    <p>rate {rate}</p>
    <p>length {length}</p>
    <p>alreadyRead {alreadyRead}</p>
  </div>
</div>

<style lang='scss'>
  input {
    margin-bottom: 1em;
  }

  .text, .emailarea {
    width: 100%;
    box-sizing: border-box;
    max-width: 340px;
    height: 3em;
    font-size: 1em;
  }

  .emailarea {
    font-family: FiraCode;
  }

  .text, textarea {
    font-size: 1em;
    font-family: ZenMaru;
  }
  
  fieldset {
    padding: 4px 11px;
  }

  textarea {
    width: 100%;
    box-sizing: border-box;
    height: 7em;
  }

  input[type="radio"] {
    display: none;
  }

  legend {
    font-family: Sawarabi;
  }
</style>