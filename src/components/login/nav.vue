<template>

<div class="container">
    <header class="navbar">

        <section class="navbar-section"></section>

        <section class="navbar-section">

            <button class="btn btn-link" style="margin: 5px;">
                <span class="text-dark">Shooping</span>
            </button>

            <div class="dropdown">
            <a href="#" class="btn btn-link dropdown-toggle" tabindex="0">
                 <span class="text-dark">Language</span><i class="icon icon-caret"></i>
            </a>
            <!-- menu component -->
            <ul class="menu">

                <li v-for="lang in $ml.list" :key="lang">
                    <a class="btrn btn-link" @click="$ml.change(lang)">
                        <span class="text-dark"> {{lang}}</span>
                    </a>
                </li>
            </ul>

            <ul class="menu">
                <a href="">asdsad</a>
            </ul>
            </div>

        </section>
    </header>

</div>

</template>
