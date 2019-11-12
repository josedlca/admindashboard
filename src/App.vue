<template>
  <div id="app" class="w-full flex h-screen max-h-screen bg-cream-primary">
    <div id="nav" class=" fixed w-64 h-screen bg-dark-primary">
		<div class=" w-full flex flex-col">
			<h1 class=" uppercase text-white tracking-wider py-3 mx-2 border-b border-gray-primary">Admin Dashboard</h1>
			<router-link class=" text-xs px-2 py-3 mont-regular uppercase font-semibold text-gray-primary hover:text-white whitespace-no-wrap" to="/">Home</router-link>
			<router-link class=" text-xs px-2 py-3 mont-regular uppercase font-semibold text-gray-primary hover:text-white whitespace-no-wrap" to="/about">About</router-link>
	  	</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
	import './assets/css/tailwind.css';

	export default {};
</script>
