<script>
	import { fade, fly } from "svelte/transition";
	import { page } from "$app/stores";
	import svelteLogo from "$lib/img/logos/svelte_white_logo.png";
	import oracleLogo from "$lib/img/logos/oracle_white_logo.svg";

	export let loading = true;

	let mNavState = false;
	function mNavClick() {
		mNavState = mNavState ? false : true;
	}
</script>

<nav>
	<div class="toolBar">
		{#if !loading}
			<div class="bg" in:fly={{ x: -200, duration: 500 }}></div>
			<div
				class="contents"
				in:fly={{ x: -100, duration: 500, delay: 300 }}
			>
				<a href="https://github.com/elemapfelr" target="_blank"
					><i class="fa-brands fa-github"></i></a
				>
			</div>
		{/if}
	</div>
	<div class="top">
		{#if loading}
			<div class="skeleton_loading" out:fade>
				<div class="skeleton_h1"></div>
				<div class="skeleton_h2"></div>
				<div class="skeleton_p"></div>
				<div class="skeleton_p"></div>
			</div>
		{:else}
			<h1 in:fade={{ duration: 300, delay: 500 }}>I'm Junhyeok Choi</h1>
			<h2 in:fade={{ duration: 300, delay: 800 }}>Front-end Developer</h2>
			<br />
			<p in:fade={{ duration: 300, delay: 1100 }}>
				3년차 프론트엔드 개발자 최준혁입니다.
				<br /><br />
				현재 사이트는 Svelte / Node.js 등을 사용하여 제작되었습니다.
				<br /><br />
				제게 관심이 있으시거나 궁금한 점이 있으시다면<br />
				아래 이메일로 연락주시면 감사하겠습니다.
				<br /><br />
			</p>
			<h5 class="contact_title" in:fade={{ duration: 300, delay: 1400 }}>
				Contact
			</h5>
			<div class="contact_email" in:fade={{ duration: 300, delay: 1400 }}>
				<i class="fa-regular fa-envelope"></i>
				<a href="mailto:elemapfelr@naver.com;">elemapfelr@naver.com</a>
			</div>
		{/if}
	</div>
	<div class="nav-bottom">
		{#if $page.url.pathname !== "/"}
			<a href="/" transition:fade>Go Index</a>
		{/if}
		<div class="h5Wrap">
			{#if loading}
				<div class="skeleton_loading" out:fade>
					<div class="skeleton_h5"></div>
				</div>
			{:else}
				<h5 in:fade={{ duration: 300, delay: 1500 }}>Skill Stacks</h5>
			{/if}
		</div>
		{#if loading}
			<div class="skills" out:fade>
				<div class="skeleton_loading">
					<div class="skeleton_span"></div>
				</div>
			</div>
		{:else}
			<div class="skills" in:fade={{ duration: 300, delay: 1600 }}>
				<span><i class="fa-brands fa-html5"></i></span>
				<span><i class="fa-brands fa-js"></i></span>
				<span><i class="fa-brands fa-node"></i></span>
				<span><i class="fa-brands fa-sass"></i></span>
				<span><img src={svelteLogo} alt="svelte logo" /></span>
				<span><i class="fa-brands fa-php"></i></span>
				<span><i class="fa-brands fa-docker"></i></span>
				<span><i class="fa-brands fa-github"></i></span>
				<span><i class="fa-brands fa-gitlab"></i></span>
				<span><img src={oracleLogo} alt="oracle logo" /></span>
			</div>
		{/if}
	</div>
</nav>
<header>
	{#if $page.url.pathname !== "/"}
		<a href="/" transition:fade>Go Index</a>
	{/if}
	<button class="navTrigger {mNavState ? 'active' : ''}" on:click={mNavClick}>
		<i></i><i></i><i></i>
	</button>
	{#if mNavState}
		<nav-m transition:fly={{ x: 400, duration: 800 }}>
			<div class="top">
				<h1>I'm Junhyeok Choi</h1>
				<h2>Front-end Developer</h2>
				<br />
				<p>
					3년차 프론트엔드 개발자 최준혁입니다.
					<br /><br />
					현재 사이트는 Svelte / Node.js 등을 사용하여 제작되었습니다.
					<br /><br />
					제게 관심이 있으시거나 궁금한 점이 있으시다면<br />
					아래 이메일로 연락주시면 감사하겠습니다.
					<br /><br />
				</p>
				<h5 class="contact_title">Contact</h5>
				<div class="contact_email">
					<i class="fa-regular fa-envelope"></i>
					<a href="mailto:elemapfelr@naver.com;"
						>elemapfelr@naver.com</a
					>
				</div>
			</div>
			<div class="bottom">
				<div class="h5Wrap">
					<h5>Skill Stacks</h5>
				</div>
				<div class="skills">
					<span><i class="fa-brands fa-html5"></i></span>
					<span><i class="fa-brands fa-js"></i></span>
					<span><i class="fa-brands fa-node"></i></span>
					<span><i class="fa-brands fa-sass"></i></span>
					<span><img src={svelteLogo} alt="svelte logo" /></span>
					<span><i class="fa-brands fa-php"></i></span>
					<span><i class="fa-brands fa-docker"></i></span>
					<span><i class="fa-brands fa-github"></i></span>
					<span><i class="fa-brands fa-gitlab"></i></span>
					<span><img src={oracleLogo} alt="oracle logo" /></span>
				</div>
			</div>
		</nav-m>
	{/if}
</header>

<style lang="scss">
	@import "./navTrigger";
	@mixin keyframes($name) {
		@keyframes #{$name} {
			@content;
		}
	}

	.skeleton_loading {
		position: absolute;
		width: 100%;
		height: 100%;
		background: transparent;

		* {
			background: linear-gradient(
				120deg,
				#777777 30%,
				#acacac 38%,
				#acacac 40%,
				#777777 48%
			);
			border-radius: 100rem;
			background-size: 200% 100%;
			background-position: 100% 0;
			animation: load 1s infinite;
		}

		@include keyframes(load) {
			100% {
				background-position: -100% 0;
			}
		}
	}

	nav {
		background-color: #202020;
		color: #fff;
		padding: 50px 25px;
		box-sizing: border-box;
		width: 550px;
		height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		float: left;
		position: relative;

		.toolBar {
			width: 100%;
			max-width: 350px;
			height: 50px;
			background-color: transparent;
			position: absolute;
			top: 0;
			left: 0%;

			.bg {
				width: 120%;
				height: 50px;
				background-color: #7567f0;
				position: relative;
				transform: skew(-60deg);
				position: absolute;
				top: 0;
				left: -40%;

				&::after {
					content: "";
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					width: 70%;
					height: 40px;
					background: linear-gradient(
						90deg,
						#f067b4 20%,
						transparent 100%
					);
				}
			}

			.contents {
				widows: 100%;
				height: 80%;
				display: flex;
				align-items: center;
				position: absolute;
				top: 0;
				left: 10%;

				a {
					background: none;
					border: none;
					outline: none;
					cursor: pointer;
					padding: 5px;

					i {
						transition: all ease 0.3s;
						border-radius: 1.5rem;
						font-size: 1.5rem;
						color: #fff;
					}

					&:hover {
						i {
							color: #81ffef;
							box-shadow: 0 0 5px #ddd;
						}
					}
				}
			}
		}

		.top {
			position: relative;
			padding-top: 50px;

			/*스켈레톤 메인 컨테이너*/
			.skeleton_loading {
				.skeleton_h1 {
					width: 95%;
					height: 70px;
					margin-bottom: 1rem;
				}
				.skeleton_h2 {
					width: 75%;
					height: 35px;
					margin-bottom: 2rem;
				}
				.skeleton_p {
					width: 90%;
					height: 1rem;
					margin-bottom: 1.8rem;

					&:nth-child(3) {
						width: 60%;
					}
				}
			}

			h1 {
				font-size: 50px;
				letter-spacing: -2px;
				transition: all 0.2s;
				white-space: nowrap;
			}

			h2 {
				text-shadow: 0px 0px 2px #fff;
				color: #202020;
				font-weight: bold;
				font-size: 35px;
				letter-spacing: -1.5px;
				transition: all 0.2s;
				white-space: nowrap;
			}

			p {
				letter-spacing: -0.6px;
				transition: all 0.2s;
				font-weight: 300;
			}

			h5 {
				font-size: 1rem;
				font-weight: normal;
				margin-bottom: 5px;
			}
			.contact_email {
				display: flex;
				align-items: center;
				column-gap: 5px;

				i {
					font-size: 1rem;
					color: #777;
				}
				a {
					color: #777;
					text-underline-offset: 3px;
				}
			}
		}

		.nav-bottom {
			a {
				padding: 10px 30px 9px;
				text-decoration: none;
				background: linear-gradient(
					135deg,
					#81ffef 10%,
					#f067b4 40%,
					#f0b067 70%,
					#7ef067 100%
				);
				background-size: 600% 600%;
				display: inline-block;
				color: #202020;
				margin-bottom: 50px;
				background-position: 0% 50%;

				&:hover {
					animation: gradientMove 15s linear infinite;
				}

				@include keyframes(gradientMove) {
					0% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
					100% {
						background-position: 0% 50%;
					}
				}
			}

			.h5Wrap {
				position: relative;
				height: 25px;
				margin-bottom: 5px;
				border-bottom: 1px solid #444;
				/*스켈레톤 메인 컨테이너*/
				.skeleton_loading {
					.skeleton_h5 {
						width: 100px;
						height: 20px;
					}
				}
				h5 {
					font-weight: normal;
				}
			}

			.skills {
				display: flex;
				align-items: center;
				column-gap: 10px;
				position: relative;

				/*스켈레톤 메인 컨테이너*/
				.skeleton_loading {
					.skeleton_span {
						width: 70%;
						height: 24px;
					}
				}

				span {
					display: block;
					width: 24px;
					height: auto;

					i {
						color: #fff;
						font-size: 20px;
						display: block;
					}
					img {
						width: 20px;
						display: block;
					}
				}
			}
		}
	}
	header {
		width: 100%;
		background-color: #202020;
		height: 50px;
		display: none;
		position: relative;
		> a {
			line-height: 50px;
			height: 100%;
			padding: 0 30px;
			text-decoration: none;
			background: linear-gradient(135deg, #81ffef 10%, #f067b4 100%);
			background-size: 200% 200%;
			background-position: 0% 50%;
			color: #202020;
			transition: all 0.2s;
			font-size: 0.8rem;
			white-space: nowrap;
			float: left;
			&:hover {
				animation: gradientMove 15s linear infinite;
			}

			@include keyframes(gradientMove) {
				0% {
					background-position: 0% 50%;
				}
				50% {
					background-position: 100% 50%;
				}
				100% {
					background-position: 0% 50%;
				}
			}
		}

		nav-m {
			position: absolute;
			top: 50px;
			right: 0;
			width: 100%;
			height: calc(100dvh - 50px);
			background-color: #202020;
			z-index: 2;
			padding: 20px;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			h2 {
				text-shadow: 0px 0px 2px #fff;
				color: #202020;
				font-weight: bold;
				font-size: 25px;
				letter-spacing: -1.5px;
				transition: all 0.2s;
			}
			h1 {
				color: #fcfcfc;
				font-size: 35px;
				letter-spacing: -2px;
				transition: all 0.2s;
			}

			p {
				color: #fcfcfc;
				font-size: 0.9rem;
				letter-spacing: -0.6px;
				transition: all 0.2s;
			}
			h5 {
				font-size: 1rem;
				font-weight: normal;
				margin-bottom: 5px;
				color: #fff;
			}
			.contact_email {
				display: flex;
				align-items: center;
				column-gap: 5px;

				i {
					font-size: 1rem;
					color: #777;
				}
				a {
					color: #777;
					text-underline-offset: 3px;
				}
			}
			.h5Wrap {
				padding-bottom: 5px;
				margin-bottom: 5px;
				border-bottom: 1px solid #444;

				h5 {
					color: #fff;
					font-weight: normal;
				}
			}

			.skills {
				display: flex;
				align-items: center;
				column-gap: 10px;
				position: relative;

				span {
					display: block;
					width: 20px;
					height: auto;

					i {
						color: #fff;
						font-size: 100%;
						display: block;
					}
					img {
						width: 20px;
						display: block;
					}
				}
			}
		}
	}

	@media screen and (max-width: 1650px) {
		nav {
			width: 450px;
			.top {
				h2 {
					font-size: 25px;
					letter-spacing: -1.3px;
				}
				h1 {
					font-size: 35px;
					letter-spacing: -1.8px;
				}

				p {
					font-size: 0.9rem;
					letter-spacing: -0.5px;
				}
			}
		}
	}
	@media screen and (max-width: 1400px) {
		nav {
			width: 350px;
			.top {
				h2 {
					font-size: 20px;
					letter-spacing: -1.2px;
				}
				h1 {
					font-size: 30px;
					letter-spacing: -1.7px;
				}

				p {
					font-size: 0.8rem;
					letter-spacing: -0.4px;
				}
			}
		}
	}
	@media screen and (max-width: 720px) {
		nav {
			display: none;
		}
		header {
			display: block;
		}
	}
</style>
