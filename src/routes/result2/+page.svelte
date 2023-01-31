<script>
	// @ts-nocheck
	import { memory } from '../stores.js';

	let tableData = [''];

	memory.subscribe((value) => {
		tableData = value;
	});

</script>

<svelte:head>
	<title>Result-2</title>
	<meta name="description" content="Result 2" />
</svelte:head>

<section>
	<div class="container">
		<div class="row text-center">
			<h2>Result-2</h2>
			<p>You can see all information about full name and car</p>
		</div>
		<hr />
		<br />
		<div class="container">
			<div class="w-100">
				<div class="pb-2">
					<span>Total: {tableData.length}</span>
				</div>
				<table>
					<thead>
						<tr>
							<td>No</td>
							<td>FullName</td>
							<td>Car</td>
						</tr>
					</thead>

					{#if tableData.length > 0}
						{#each tableData as row, i}
							<tr>
								<td>{i + 1}</td>
								<td>
									{row['firstName'] + ' ' + row['lastName']}
								</td>
								<td>
									{row['carModel'] + ' ' + row['carBrand']}
								</td>
							</tr>
						{/each}
					{:else}
						<tr><td>No data</td></tr>
					{/if}
				</table>
			</div>
		</div>
	</div>
</section>

<style>
	tr > td {
		width: 45%;
	}
	td:first-child {
		width: 10%;
	}
</style>
