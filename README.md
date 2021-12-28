# FRONTEND IS
Frontend part of IS_EXAMPLE project. 
The project is an example of system for employees communication and work organization. This system allows to read and write messages, watch company's departments and offices, search info about employees, close tasks and etc.
## Tech stack
- ReactJS
- NodeJS
- HTML 5
- CSS
## Run locally with docker
Get the image
```bash
docker pull gigagibi/is_example_frontend
```
Run image on port 3000
```bash
docker run -p 3000:3000 -it gigagibi/is_example_frontend
```
## Run locally with npm and command line
**Before launching this app, you need to launch backend part of project https://github.com/gigagibi/IS_example_backend**
Requirements
- Node JS

1. Clone this repo
```bash
git clone https://github.com/gigagibi/IS_example_frontend
```
2. Install dependencies
```bash
<app_directory> npm install
<app_directory>/src npm install
```

3. Run app
```bash
<app_directory> npm start
```

Site will be available on [http://127.0.0.1:3000]

## Images
**(design needs to be updated)**

### Login page
![image](https://user-images.githubusercontent.com/70891118/147393247-23c39434-22a3-41ec-9ed7-ab2ab5c5463e.png)

### Home page
![image](https://user-images.githubusercontent.com/70891118/147407492-5cdef023-0113-4213-8cf5-7d476d0d7d18.png)

### Departments Page
![image](https://user-images.githubusercontent.com/70891118/147393351-aa5b4111-9307-4b01-96f5-67d854ed5e80.png)

### Employees page
![image](https://user-images.githubusercontent.com/70891118/147393460-4881f192-7bd2-46c5-b913-0d8dc799e425.png)
![image](https://user-images.githubusercontent.com/70891118/147393463-4253bee5-20c0-48d7-9f64-66220c52369f.png)

### Report card page
![image](https://user-images.githubusercontent.com/70891118/147393476-40197904-f8d5-446f-b453-e1f6d6bf43df.png)

### Tasks page
![image](https://user-images.githubusercontent.com/70891118/147393484-2aa22674-e58d-4eba-bd78-4de273ca3ba0.png)

### Messages page
![image](https://user-images.githubusercontent.com/70891118/147393489-f6a20825-fca0-4978-8dae-c7b402af6914.png)

### Employee register page (available only for admins)
![image](https://user-images.githubusercontent.com/70891118/147393508-d3ef57d0-bba9-4869-9193-e798b3cab86b.png)
