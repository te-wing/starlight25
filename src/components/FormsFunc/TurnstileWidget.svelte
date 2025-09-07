<script lang="ts">
  export let widgetRenderId: number;

  widgetRenderId = widgetRenderId + 1
</script>

<div>
  {#key widgetRenderId}
    <div
      class="cf-turnstile"
      data-sitekey="0x4AAAAAABycHtFvIrRAAG4r"
      data-theme="light"
      data-size="normal"
      data-callback="onSuccess"
    ></div>
  {/key}
</div>