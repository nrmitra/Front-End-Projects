from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/success", methods=["GET", "POST"])
def success():
    clinic_notes = None
    if request.method == "POST":
        clinic_notes = request.form.get("notes", "No notes provided")  # Safeguard for missing data
    elif request.method == "GET":
        clinic_notes = request.args.get("notes", "No notes provided")  # Handle GET requests
    
    print(clinic_notes)
    return render_template("success.html", clinic_notes=clinic_notes)

@app.route("/", methods=["GET", "POST"])
def index():
    clinic_notes = None
    if request.method == "POST":
        clinic_notes = request.form.get("notes", "No notes provided")
        print("Clinic Notes from /:", clinic_notes)
        return render_template("index.html", clinic_notes=clinic_notes)
    
    # Default rendering for GET request
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
