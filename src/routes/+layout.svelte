<script lang="ts">
	import "./layout.css";
	import lightFavicon from "$lib/assets/favicon-light.svg";
	import darkFavicon from "$lib/assets/favicon-dark.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={lightFavicon} media="(prefers-color-scheme: light)" />
	<link rel="icon" href={darkFavicon} media="(prefers-color-scheme: dark)" />
</svelte:head>
{@render children()}
