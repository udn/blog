<template>
  <div class="max-w-md sm:max-w-xl lg:max-w-3xl mx-auto px-8 lg:px-12 py-8">
    <header class="header">
      <nav class="flex items-center justify-between flex-wrap">
        <div class="w-full block flex">
          <div class="inline-block mt-0 font-serif text-lg flex-grow">
            <strong>
              <g-link to="/">{{ $static.metaData.siteName }}</g-link>
            </strong>
          </div>
          <div>
            <div class="inline-block text-sm leading-none mt-0 text-right">
              <ul>
                <li class="font-bold">Rabu Wage</li>
                <li>7 Agustus 2019 </li>
                <li>10 Dzuhlijjah 1440</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
