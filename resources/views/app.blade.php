<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Fr. Porukara CMI College') }}</title>
        <!-- Meta Tags -->
        <meta name="generator" content="porukaracollege, PorukaraCollege, Porukara Website, porukara, Fr Porukara School, Official Website of Porukara CMI College, Kerala. e college is named after Rev. Fr. Thomas Porukara, a great and co-founder of the CMI Catholic Religious Congregation. The college is managed by Mount Tabor and Charitable Society of Gagultha Monastery, Champakulam, CMI Colleges in Kuttanadu, Top College in Kerala and Kuttanadu">
        <meta name="keywords" content="Fr. Porukara CMI College, BCA Colleges,Best BCA, B.Com COllege in kerala,Colleges in Kerala,Best Colleges in Kuttanad, Best College in Alappuzha,BCA,B.Com">
        <meta name="description" content="Official Website of Porukara CMI Colllege, Champakulam, Kerala, India">

<!-- Open Graph Meta Tags -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://porukaracollege.in">
        <meta property="og:title" content="Fr. Porukara CMI Colllege of Advanced Studies">
        <meta property="og:description" content="Offical website of Fr. Porukara CMI College of advanced Studies, Gagultha Monastry, Champakulam, Kerala">
        <meta property="og:site_name" content="Fr. Porukara College">
        <meta property="og:image" content="https://porukaracollege.in/storage/thumbnail.jpg">
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
