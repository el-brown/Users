class UsersController < ApplicationController
  
  #READ all users
  def index
    @user = User.all
    render component: "Users", props: {users: @user}
  end

  #NEW user in memory but not in the database. Use this to create the new Form.
  def new
    @user = User.new
    render component: "NewUser", props: {user:@user}
  end


  def create
  end

  #READ single user
  def show
    @user = User.find(params[:id])
    render component: "User", props: {user:@user}
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
