<script lang="ts">
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../../firebase/client';

  let email = '';
  let password = '';
  let errorMessage = '';

  const handleAuth = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '/admin/';
    } catch (error: any) {
      errorMessage = error.message;
      alert(`エラー: ${errorMessage}`);
      console.error(error);
    }
  };
</script>

<div>
  <h3>管理者ログイン</h3>
  <section>
    <form on:submit|preventDefault={() => handleAuth()}>
      <label for="email">メールアドレス</label>
      <input type="email" bind:value={email} required /><br />
      <label for="password">パスワード</label>
      <input type="password" bind:value={password} required minlength="6" /><br />
      {#if errorMessage}
        <p>{errorMessage}</p>
      {/if}
      <button type="submit">ログイン</button>
    </form>
  </section>
</div>

<style lang='scss'>

</style>