class UsersController < ApplicationController
  
  #READ all users
  def index
    render component: "Users", props: {users:  User.all}
  end
  
  #READ single user
  def show
    user = User.find(params[:id])
    render component: 'User', props:{user:user}
  end

  #NEW user in memory but not in the database. Use this to create the new Form.
  def new
    render component: "NewUser"
  end

  def edit
    # Find the user
    user = User.find(params[:id])
    render component: "EditUser", props: {user:user}
  end

  def create
    user = User.new(user_params)
    if user.save
      redirect_to users_path
    else
      #TODO what about invalid input?
    end
  end


  def update
    user = User.find(params[:id])
    if user.update(user_params)
      redirect_to users_path
    else
      #TODO handle invalid input...Later
      # render :edit
    end
  end

def destroy
    user = User.find(params[:id])
    user.destroy
    redirect_to users_path
  end

  private

  def user_params
    params.require(:user).permit(:name, :age)
  end
end
