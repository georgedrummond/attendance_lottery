require 'rubygems'
require 'sinatra'
require 'haml'
require 'sass'

get '/' do
  haml :index
end

get '/css/styles.css' do
  sass :styles
end

post "/lottery" do
  @students = params[:file][:tempfile].readlines.sort
  haml :lottery
end

helpers do
  def pad_number(number)
    return "%03d" % number
  end
end