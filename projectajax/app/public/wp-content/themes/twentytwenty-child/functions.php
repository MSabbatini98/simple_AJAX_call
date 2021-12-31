<?php
add_action('wp_enqueue_scripts', 'enqueue_parent_styles');

function enqueue_parent_styles() {
	
	// enqueue parent styles
	wp_enqueue_style('parent-style', get_template_directory_uri() .'/style.css');
	
	// enqueue child styles
	wp_enqueue_style('child-style', get_stylesheet_directory_uri() .'/style.css', array('parent-style'));
}

// !! Additional CSS files
// echo (get_stylesheet_directory().'/main.js');
add_action('wp_enqueue_scripts', 'main_js');
function main_js() {
    wp_enqueue_script('custom_js', get_stylesheet_directory_uri().'/main.js');
}