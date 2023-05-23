FROM python:3.8-alpine

COPY ./ /src
RUN apk update && pip install -r /src/requirements.txt --no-cache-dir
RUN pip install -e /src
EXPOSE 8080
CMD web_server