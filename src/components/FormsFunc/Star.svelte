<script lang='ts'>
  export let rateStar: number;
  export let currentRate: number;

  let starFilled: boolean = false;

  if ( rateStar >= currentRate) {
    starFilled = true;
  } else {
    starFilled = false;
  }
</script>

<span>
  {#if (starFilled)}
    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f">
      <path d="m323-245 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"/>
    </svg>
  {:else}
  {/if}
</span>

<style lang="scss">

</style>