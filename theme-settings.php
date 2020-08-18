<?php
	use Drupal\file\Entity\File;
  use Drupal\core\Url;

function moorlands_form_system_theme_settings_alter(&$form, &$form_state) {

  if(!empty(theme_get_setting('moorlands_footer_logo'))) {

}

  $form['moorlands_footer_logo'] = array(
    '#type' => 'managed_file',
    '#title' => t('Footer Logo'),
    '#required' => FALSE,
    '#upload_location' => 'public://',
    '#default_value' => theme_get_setting('moorlands_footer_logo'),
    '#upload_validators' => array(
      'file_validate_extensions' => array('gif png jpg jpeg'),
    ),
  );

  $form['moorlands_contact_form_background_image'] = array(
    '#type' => 'managed_file',
    '#title' => t('Contact Page Banner'),
    '#required' => FALSE,
    '#upload_location' => 'public://',
    '#default_value' => theme_get_setting('moorlands_contact_form_background_image'),
    '#upload_validators' => array(
      'file_validate_extensions' => array('png jpg jpeg'),
    ),
  );

  $form['moorlands_social_link'] = array(
    '#type'         => 'fieldset',
    '#title'        => t('Social Info'),
    '#description'  => t('Social information to display in the footer'),
    '#weight'       => -999,
    '#open'         => TRUE,
    );

  $form['moorlands_social_link']['moorlands_dribbble_link'] = array(
    '#type'           => 'textfield',
    '#title'          => t('Dribbble Link'),
    '#default_value'  => theme_get_setting('moorlands_dribbble_link'),
  );

  $form['moorlands_social_link']['moorlands_facebook_link'] = array(
    '#type'           => 'textfield',
    '#title'          => t('Facebook Link'),
    '#default_value'  => theme_get_setting('moorlands_facebook_link'),
  );

  $form['moorlands_social_link']['moorlands_twitter_link'] = array(
    '#type'           => 'textfield',
    '#title'          => t('Twitter Link'),
    '#default_value'  => theme_get_setting('moorlands_twitter_link'),
  );

   $form['moorlands_social_link']['moorlands_apple_link'] = array(
    '#type'           => 'textfield',
    '#title'          => t('Apple Link'),
    '#default_value'  => theme_get_setting('moorlands_apple_link'),
  );

 $form['moorlands_address'] = array(
  '#type' => 'text_format',
  '#title' => t('Address'),
  '#format' => 'full_html',
  '#default_value' => theme_get_setting('moorlands_address.value'),
  );

  $form['moorlands_contact_number'] = array(
    '#type' => 'textfield',
    '#title' => t('Contact Number'),
    '#default_value' => theme_get_setting('moorlands_contact_number'),
  );

   $form['moorlands_get_in_touch'] = array(
    '#type' => 'textfield',
    '#title' => t('Get In Touch Text'),
    '#default_value' => theme_get_setting('moorlands_get_in_touch'),
  );

  $form['moorlands_email_address'] = array(
    '#type' => 'textfield',
    '#title' => t('Email Address'),
    '#default_value' => theme_get_setting('moorlands_email_address'),
  );

  $form['moorlands_google_map'] = array(
    '#type'         => 'fieldset',
    '#title'        => t('Google Map'),
    '#description'  => t('Google Map Lattitude and Longitude'),
    '#weight'       => -998,
    '#open'         => TRUE,
    );

   $form['moorlands_google_map']['moorlands_lattitude'] = array(
    '#type' => 'textfield',
    '#title' => t('Lattitude'),
    '#default_value' => theme_get_setting('moorlands_lattitude'),
  );

    $form['moorlands_google_map']['moorlands_longitude'] = array(
    '#type' => 'textfield',
    '#title' => t('Longitude'),
    '#default_value' => theme_get_setting('moorlands_longitude'),
  );

  $form['#submit'][] = 'custom_image_save';
   return $form;
}

function custom_image_save(&$form, &$form_state) {

  $fid = $form_state->getValue('moorlands_footer_logo');
  $file = File::load($fid[0]);
  $file->setPermanent();
  $file->save();

  $contactFid = $form_state->getValue('moorlands_contact_form_background_image');
  $contactFile = File::load($contactFid[0]);
  $contactFile->setPermanent();
  $contactFile->save();

}
