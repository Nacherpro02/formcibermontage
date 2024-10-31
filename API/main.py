import os
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
import pymysql
import json

load_dotenv()

app = Flask(__name__)
CORS(app)

def connect_db():
  connection = None
  try:
    connection = pymysql.connect(
      charset="utf8mb4",
      cursorclass=pymysql.cursors.DictCursor,
      database=os.getenv("DB"),
      host=os.getenv("HOST"),
      password=os.getenv("PASS"),
      user=os.getenv("USER_DB"),
      port=int(os.getenv("PORT"))
      )
  except pymysql.Error as e:
    print(e)
  return connection



@app.route("/", methods=["GET"])
def hello_world():
  """Example Hello World route."""
  name = "World"
  return f"Hello {name}!"

@app.route("/submit", methods=["POST"])
def submit_form():
  connection = connect_db()
  cursor = connection.cursor()
  if request.method == "POST":
    form = request.json
    question_1 = form.get("question_1")
    question_2 = form.get("question_2")
    question_3 = form.get("question_3")
    question_4 = form.get("question_4")
    question_5 = form.get("question_5")
    question_6 = form.get("question_6")
    question_7 = form.get("question_7")
    question_8 = form.get("question_8")
    question_9 = form.get("question_9")
    question_10 = form.get("question_10")
    question_11 = form.get("question_11")
    question_12 = form.get("question_12")
    question_13 = form.get("question_13")

    sql = """ INSERT INTO form_table (question_1, question_2, question_3, question_4, question_5, question_6, question_7, question_8, question_9, question_10, question_11, question_12, question_13)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""

    cursor.execute(sql, (question_1, question_2, question_3, question_4, question_5, question_6, question_7, question_8, question_9, question_10, question_11, question_12, question_13))
    connection.commit()

    return f"Formulario enviado correctamente"

@app.route("/get_data", methods=["GET"])
def get_data():
  connection = connect_db()
  cursor = connection.cursor()
  if request.method == "GET":
    
    sql = "SELECT * FROM form_table"
    cursor.execute(sql)
    rows = cursor.fetchall()
    forms = [
      dict(id=row["id"],date=row["create_time"], question_1=row["question_1"], question_2=row["question_2"], question_3=row["question_3"], question_4=row["question_4"], question_5=row["question_5"], question_6=row["question_6"], question_7=row["question_7"], question_8=row["question_8"], question_9=row["question_9"], question_10=row["question_10"], question_11=row["question_11"], question_12=row["question_12"], question_13=row["question_13"])
    for row in rows
    ]
    if forms is not None:
      return jsonify(forms)

@app.route("/get_data/<int:id>", methods=["GET"])
def get_data_by_id(id):
  connection = connect_db()
  cursor = connection.cursor()
  if request.method == "GET":
    sql = "SELECT * FROM form_table WHERE id = %s"
    cursor.execute(sql, (id,))
    rows = cursor.fetchall()
    for row in rows:
      form = row
    if form is not None:
      return jsonify(form)
    else:
      return "That form doesn't exist"


@app.route("/delete_data", methods=["DELETE"])
def delete_data():
  connection = connect_db()
  cursor = connection.cursor()
  if request.method == "DELETE":
    form = request.json
    id = form.get("id")
    sql = "DELETE FROM form_table WHERE id = %s"
    cursor.execute(sql, (id,))
    connection.commit()
    return f"Formulario con id {id} eliminado correctamente"


if __name__ == "__main__":
  app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 3000)))