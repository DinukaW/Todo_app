# ToDo app

Used frameworks,
- for frontend used react and django rest framework for backend
- packages installed (node v 16.17.0, npm 8.15.0, python 3.8, pip 20.0.2 )


## Settup project on local environment
### Frontend
goto frontend directory and run  ```npm install ```
then to run server run ``` npm run start``` now you can access app via http://localhost:3000/ 
( for now inside package.json proxy configured to the gcp server change it to http://localhost:8000/ for connect local django backed )

### Backend
goto backend directory and create virtual envirenment using ```python3 -m venv venv```
then activate it by running ```source venv/bin/activate``` 
install requirenment.txt file ```pip install -r requirement.txt```
(if give error when installing mysql client install build-essentials ```apt-get install build-essentials``` )
then create new database named todos
run migrations before start server using ```python3 manage.py migrate```
start server using ```python3 manage.py runserver```

now you'll able to view,add,delete tasks using frontend app
api end points (api/todos/) are in Django-TodoApp.postman_collection.json


## Settup project on GCP
### Frontend
didn't deployed brcause there's an error and unable to solve that untill now 😕

### cloud sql proxy
setup cloud sql proxy for securely connect compute engine and db [how?](https://cloud.google.com/sql/docs/mysql/connect-admin-proxy)
### backend
run same steps as local and create gunicorn service ```sudo nano /etc/systemd/system/gunicorn.service``` copy context in gunicorn.service to run the server and expose it using nginx
you can find nginx configuration file(todo-be) in parent directory and copy it into /etc/nginx/sites-available directory and create symlink to /etc/nginx/sites-enabled

