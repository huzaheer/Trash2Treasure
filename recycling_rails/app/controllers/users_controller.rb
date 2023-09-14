class UsersController < ApplicationController

    # PUT users/:id/sumPoints
    def sumPoints
        @user = User.find(params[:id])
        @user.update(points: @user.points+params[:new_points])
        render json: @user, status: :ok
    end

    # GET /users/:id/getName returns name of the person
    def getName
        @user = User.find(params[:id])
        render json: {name: @user.name}
    end

    # GET /users/:id/getPoints returns the number of points of the person
    def getPoints
        @user = User.find(params[:id])
        render json: {points: @user.points}
    end

    # GET /users/:id/getDorm
    def getDorm
        @user = User.find(params[:id])
        dorms = ["Craven", "Crowell", "Edens", "Few", "Hollows", "Keohane", "Kilgo", "Wannamaker"]
        @arr = Array.new()
        r = ""
        max = 0
        for i in 0..7
            total = User.where(dorm: dorms[i]).sum(:points)
            if total > max
                r = dorms[i] 
                max = total
            end
        end
        render json: {dorm: @user.dorm, wDorm: r}
    end

    # GET /users/:id/getTop_All
    def getTop_All
        render json: {name: User.order(points: :desc).limit(30)}
    end

    # GET/users/:id/getDormRank
    def getDormRank
        dorms = ["Craven", "Crowell", "Edens", "Few", "Hollows", "Keohanne", "Kilgo", "Wannamaker"]
        @arr = Array.new()
        for i in 0..7
            @total = User.where(dorm: dorms[i]).sum(:points)
            @temp = {
                dorm: dorms[i],
                points: @total
            }
            @arr.push(@temp)
        end
        
        # Returns JSON file with the result of the dorms
        render json: {results: @arr.sort {|a, b| b[:points] <=> a[:points]}}
    end

    # new users
    def new
        @user = User.new
    end

    def show
        @user = User.find(params[:dorm])
        render json: @user, status: :ok
    end

    def index
        @user = User.find(params[:id])
        render json: @sources, status: :ok
    end

    def create
        @dorm = Dorm.find(params[:dorm_id])
        @user = @dorm.user.create(user_params)
    end

    def user_params
        params.permit(:name, :netid, :points, :reports)
    end
end
