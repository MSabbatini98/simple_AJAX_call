<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'M8l53KbUHYeb3s+r+weG3qBJGCXg4cvu4EPYBcbRLAXeEIKe7VM17x7O01kh60iiRwO6Ea0AW1CpQk+waeKVog==');
define('SECURE_AUTH_KEY',  'cwazNfsQpOyD5wHGMFnMHM2djvynMwBn94cpCICleyYOliiHitrUWk9TmWy7YVEFMwNOKKeq5gAWmr/9eEv8bw==');
define('LOGGED_IN_KEY',    'j5TZKeDybr6tlRX3txS3G48WBwNntWGjI3ca31PHNqaOqolVktJlM46Ddw8bTDpfHE9lLWb+FFeUWw7SDhoDEw==');
define('NONCE_KEY',        'R7dTVimU+oHjgHVVlqpYJ2+lni0jXG4UYTKoaWqtZ1XYsdQn8Iqx/13Y4UuwMaL9SauFPxNH4KSpDxkks+eZOA==');
define('AUTH_SALT',        'IprRlD2MNFCQ38fqB4tTycqJVDChRG/9b2AfwA0hhkh1I9iZZB5f8LD93Rj31ZQSQ5SZA/PyGSMin+Whkt5fnw==');
define('SECURE_AUTH_SALT', 'umdaG3UVhGzJ2X8MF4rUGCVc8IlIolVye7XmE//wsabJYIrXtCvz5PKQvlO1n8Uo7iCp9W9pR0+FgSOKrxhG9w==');
define('LOGGED_IN_SALT',   'M+W4jBUqn+J55auZMwVWO1ZrWNet/7MePvHshmDeSsg8Mu0heFjQglkHgv3Fg0bnBor7iarmH5xuyb5TgNa/jQ==');
define('NONCE_SALT',       'B53BJmuyA6u7ViPCRH4UlZXOJffxS/iNiYqFrXSaPJbijnElgpX4gwemtstHGaHTSBrwxHkmt0l+M0P14HnA0g==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
