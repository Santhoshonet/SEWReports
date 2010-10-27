# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_SEWReports_session',
  :secret      => '42ee7614c2042fe33608e51780193b0ca72fe84078bced1a8181c1bae16d220c9924647cc1810a3a0737062911ac3db6e473d7d1bde1f8f25b3f632740f24ece'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
