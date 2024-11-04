#!/bin/sh
cd API
source .venv/bin/activate
python -m flask --app main run --debug