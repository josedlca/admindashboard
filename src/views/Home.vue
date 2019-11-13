<template>
  <div class="w-full flex flex-col ml-64">
	  <div class="w-full flex flex-row justify-between py-2 px-7 items-center">
			<div class=" w-3/6 flex flex-row items-center">
				<div class=" w-10 mr-3 h-10 bg-brown-primary flex justify-center items-center rounded-full hover:bg-brown-secondary cursor-pointer">
					<svg class="w-8 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
					</svg>
					<svg class="w-8 fill-current text-white hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"/>
					</svg>
				</div>
				<a href="#" class=" mont-light text-brown-primary text-xl">Admin Dashboard Beta</a>
			</div>
			<div class=" w-3/6 flex flex-row">
				<div class=" w-7/12">
					<div class="w-full flex flex-row relative">
						<input class=" w-full p-3 text-brown-secondary search-placeholder-color text-sm rounded-lg outline-none bg-cream-secondary mont-light" type="text" aria-label="Search" placeholder="Search...">
						<div class="absolute h-full flex items-center right-0 pr-3">
							<svg class="w-4 fill-current text-brown-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
							</svg>
						</div>
					</div>
				</div>
				<div class=" w-5/12 flex  items-center">
					<ul class="w-full flex flex-row">
						<li class="w-4/12 flex justify-center">
							<svg class="w-4 fill-current text-brown-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<title>layout icon</title>
								<path d="M0 0h9v9H0V0zm2 2v5h5V2H2zm-2 9h9v9H0v-9zm2 2v5h5v-5H2zm9-13h9v9h-9V0zm2 2v5h5V2h-5zm-2 9h9v9h-9v-9zm2 2v5h5v-5h-5z"/>
							</svg>
						</li>
						<li class="w-4/12 flex justify-center">
							<svg class="w-4 fill-current text-brown-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<title>Notifications icon</title>
								<path d="M4 8a6 6 0 0 1 4.03-5.67 2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z"/>
							</svg>						
						</li>
						<li class="w-4/12 flex justify-center">
							<svg class="w-4 fill-current text-brown-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<title>Configuracion icon</title>
								<path d="M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
							</svg>
						</li>
					</ul>
				</div>
			</div>
	  </div>
  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>
