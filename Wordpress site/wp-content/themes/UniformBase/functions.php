<?php
/**
 * Author: Ole Fredrik Lie
 * URL: http://olefredrik.com
 *
 * FoundationPress functions and definitions
 *
 * Set up the theme and provides some helper functions, which are used in the
 * theme as custom template tags. Others are attached to action and filter
 * hooks in WordPress to change core functionality.
 *
 * @link https://codex.wordpress.org/Theme_Development
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

/** Various clean up functions */
require_once( 'library/cleanup.php' );

/** Required for Foundation to work properly */
require_once( 'library/foundation.php' );

/** Format comments */
require_once( 'library/class-foundationpress-comments.php' );

/** Register all navigation menus */
require_once( 'library/navigation.php' );

/** Add menu walkers for top-bar and off-canvas */
require_once( 'library/class-foundationpress-top-bar-walker.php' );
require_once( 'library/class-foundationpress-mobile-walker.php' );

/** Create widget areas in sidebar and footer */
require_once( 'library/widget-areas.php' );

/** Return entry meta information for posts */
require_once( 'library/entry-meta.php' );

/** Enqueue scripts */
require_once( 'library/enqueue-scripts.php' );

/** Add theme support */
require_once( 'library/theme-support.php' );

/** Add Nav Options to Customer */
require_once( 'library/custom-nav.php' );

/** Change WP's sticky post class */
require_once( 'library/sticky-posts.php' );

/** Configure responsive image sizes */
require_once( 'library/responsive-images.php' );

/** If your site requires protocol relative url's for theme assets, uncomment the line below */
// require_once( 'library/class-foundationpress-protocol-relative-theme-assets.php' );

//  change maximum file load size

@ini_set( 'upload_max_size' , '64M' );
@ini_set( 'post_max_size', '64M');
@ini_set( 'max_execution_time', '300' );


/**
 * WordPress admin customisation
 */
function my_login_logo() { ?>
	<style type="text/css">

		html {
			background: #f6f6f6;
		}

		body.login div#login h1 a {
			/* background: url(<?php echo get_bloginfo( 'template_directory' ) ?>/assets/images/theme/medelalogo.svg) no-repeat !important;*/
			padding-bottom: 0;
			background-size: 300px 57px;
			height: 57px;
			margin: 0 auto 25px;
			width: 300px;
		}

		body.login {
			/* background: #000 url(<?php echo get_bloginfo( 'template_directory' ) ?>/assets/images/theme/splash-screen.jpg) no-repeat !important;*/
			background-size: cover !important;
			background-position: 50% !important;
			font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
			font-weight: 300;
			color: #757474;
		}

		body #login {
			position: relative;;
			overflow: hidden;
		}

	</style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );

// customise the made by content
function modify_footer_admin () {
	echo 'Created by <a href="http://uniform.net">Uniform</a>. Powered by <a href="http://www.wordpress.org">WordPress</a>';
}
add_filter('admin_footer_text', 'modify_footer_admin');


// add scripts to head
function header_items() { }
add_action('wp_head','header_items');

//add scripts to footer
add_action('wp_footer','add_footerScripts');
function add_footerScripts() {
	?>
	<script id="__bs_script__">//<![CDATA[
    document.write("<script async src='http://HOST:3001/browser-sync/browser-sync-client.js?v=2.24.5'><\/script>".replace("HOST", location.hostname));
	//]]></script>
<?php
 }


// to add custom post types to the sites menu
add_action( 'init', 'create_post_type' );
function create_post_type() {
	register_post_type( 'collections',
		array(
			'labels' => array(
				'name' => __( 'Collections' ),
				'singular_name' => __( 'Collections' )
			),
		'public' => true,
		'show_in_nav_menus' => true,
		'has_archive' => true,
		)
	);	
}


// remove admin items we don't use / need
// $restricted = array(__('Links'), __('Comments'), __('Posts'),__('Tools'),__('Users'), __('Plugins'));
function remove_menu_items() {
  global $menu;
  $restricted = array(__('Links'), __('Comments'), __('Posts'),__('Tools'),__('Users'));
  end ($menu);
  while (prev($menu)){
    $value = explode(' ',$menu[key($menu)][0]);
    if(in_array($value[0] != NULL?$value[0]:"" , $restricted)){
      unset($menu[key($menu)]);}
    }
  }

//add_action('admin_menu', 'remove_menu_items');

//  remove admin item we don't use / need
function remove_submenus() {
  global $submenu;
  unset($submenu['index.php'][10]); // Removes 'Updates'.
  unset($submenu['themes.php'][5]); // Removes 'Themes'.
  unset($submenu['options-general.php'][10]); // Removes 'Writing'.
  unset($submenu['options-general.php'][15]); // Removes 'Discussion'.
  unset($submenu['options-general.php'][20]); // Removes 'Writing'.
  unset($submenu['options-general.php'][25]); // Removes 'Discussion'.
  unset($submenu['options-general.php'][30]); // Removes 'Writing'.
  unset($submenu['options-general.php'][35]); // Removes 'Discussion'.
  unset($submenu['options-general.php'][40]); // Removes 'Discussion'.
  unset($submenu['edit.php'][16]); // Removes 'Tags'.
}

//add_action('admin_menu', 'remove_submenus');
/ Hide 'Screen Options' tab
function remove_screen_options_tab() {
    return false;
}
//add_filter('screen_options_show_screen', 'remove_screen_options_tab');


// add options page
if( function_exists('acf_add_options_page') ) {
	acf_add_options_page();	
}
