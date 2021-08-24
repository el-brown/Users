class StaticPagesController < ApplicationController
  def home
    render component: "Home", props:{ info: "Yo" }
  end
  def random
    render component: "Users", props:{ info: "Yo" }
  end
end
