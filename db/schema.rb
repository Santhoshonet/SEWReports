# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20101027195027) do

  create_table "issues", :force => true do |t|
    t.date     "month"
    t.integer  "active"
    t.decimal  "closed"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "milestones", :force => true do |t|
    t.date     "month"
    t.integer  "build"
    t.integer  "unbuild"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "project_performances", :force => true do |t|
    t.date     "month"
    t.integer  "pv"
    t.integer  "lrecontract"
    t.integer  "lrepmc"
    t.float    "contractindex"
    t.float    "cpi"
    t.float    "spi"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "projects", :force => true do |t|
    t.string   "name"
    t.string   "location"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "qualityhscindices", :force => true do |t|
    t.date     "month"
    t.integer  "qualityindex"
    t.integer  "hscindex"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "risks", :force => true do |t|
    t.date     "month"
    t.integer  "active"
    t.integer  "closed"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
