# Surf Tracker 
## Introduction
The surf tracker application is a micro-services software system that provides users with interpreted surf forecasts and allows registered users to log their surf sessions.
The backbone of the system is a machine learning model that takes care of the forecast interpretation. The model is being trained on the logged surf sessions,
which results in a system that becomes 'smarter' over time.

## Guide
This readme provides an overview of the whole project, while additional readme files can be found in each service folder that contains further information about the specific service.

## Services & Technologies & Status
| Service | Technology | Status |
|---------|------------|--------|
|Front-app| Ionic, Angular|In progress|
|Forecast data collector|Django|In progress|
|Forecast provider|Django|In progress|
|Surf session logger|Django|In progress|
|User service|Django|In progress|
|Forecast interpreter|TBD|To do|
|API Gateway|TBD|To do|
|Message broker|TBD|To do|


## Architecture
The following diagram gives an overview of the system that can help with understanding how the services connect with each other:

![C2 drawio_v1 1 drawio (1)](https://user-images.githubusercontent.com/84147181/225013877-0e44397c-00e7-4f65-911b-b637200b1993.png)
