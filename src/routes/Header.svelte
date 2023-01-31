<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import {onMount} from 'svelte';

	let showMobileMenu = false;

	// List of navigation items
	const navItems = [
		{ label: "SignUp", href: "/" },
		{ label: "Result 1", href: "result1" },
		{ label: "Result 2", href: "result2" },
	];

	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	// Media match query handler
	// @ts-ignore
	const mediaQueryHandler = e => {
		// Reset mobile state
		if (!e.matches) {
		  showMobileMenu = false;
		}
	};

	// Attach media query listener on mount hook
	onMount(() => {
		const mediaListener = window.matchMedia("(max-width: 767px)");

		mediaListener.addListener(mediaQueryHandler);
	});
</script>

<header>
	<nav>
		<div class="inner">
			<div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
			  <div class="middle-line"></div>
			</div>
			<ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
			  {#each navItems as item}
			    <li>
			      <a href={item.href}>{item.label}</a>
			    </li>
			  {/each}
			</ul>
		</div>
	</nav>
</header>

<style>
	nav {
	  background-color: rgba(0, 0, 0, 0.8);
	  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
	  height: 100px;
	}

	.inner {
	  max-width: 980px;
	  padding-left: 20px;
	  padding-right: 20px;
	  padding-top: 20px;
	  margin: auto;
	  box-sizing: border-box;
	  display: flex;
	  align-items: center;
	  height: 100%;
	}

	.mobile-icon {
	  width: 25px;
	  height: 14px;
	  position: relative;
	  cursor: pointer;
	  z-index: 9999;
	}

	.mobile-icon:after,
	.mobile-icon:before,
	.middle-line {
	  content: "";
	  position: absolute;
	  width: 100%;
	  height: 2px;
	  background-color: #fff;
	  transition: all 0.4s;
	  transform-origin: center;
	}

	.mobile-icon:before,
	.middle-line {
	  top: 0;
	}

	.mobile-icon:after,
	.middle-line {
	  bottom: 0;
	}

	.mobile-icon:before {
	  width: 66%;
	}

	.mobile-icon:after {
	  width: 33%;
	}

	.middle-line {
	  margin: auto;
	}

	.mobile-icon:hover:before,
	.mobile-icon:hover:after,
	.mobile-icon.active:before,
	.mobile-icon.active:after,
	.mobile-icon.active .middle-line {
	  width: 100%;
	}

	.mobile-icon.active:before,
	.mobile-icon.active:after {
	  top: 50%;
	  transform: rotate(-45deg);
	}

	.mobile-icon.active .middle-line {
	  transform: rotate(45deg);
	}

	.navbar-list {
	  display: none;
	  width: 100%;
	  justify-content: space-around;
	  margin: 0;
	  padding: 0 55px;
	  z-index: 999;
	}

	.navbar-list.mobile {
	  background-color: rgba(0, 0, 0, 0.8);
	  position: fixed;
	  display: block;
	  height: calc(100% - 100px);
	  bottom: 0;
	  left: 0;
	}

	.navbar-list li {
	  list-style-type: none;
	  position: relative;
	}

	.navbar-list li:before {
	  content: "";
	  position: absolute;
	  bottom: 0;
	  left: 0;
	  width: 100%;
	  height: 1px;
	  background-color: #424245;
	}

	.navbar-list a {
	  color: #fff;
	  text-decoration: none;
	  display: flex;
	  height: 45px;
	  align-items: center;
	  padding: 0 10px;
	  font-size: 1.5em;
	}

	@media only screen and (min-width: 767px) {
	  .mobile-icon {
	    display: none;
	  }

	  .navbar-list {
	    display: flex;
	    padding: 0;
	  }

	  .navbar-list a {
	    display: inline-flex;
	  }
	}
</style>
