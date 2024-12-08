from flask import Flask,render_template,request, jsonify

app = Flask(__name__)

@app.route("/hello")
def home():
    return "Hello world!"

@app.route("/",methods= ["POST","GET"])
def input():
    if request.method == "POST":
        fmnth_key = request.form["fmnth"]
        product_market_name = request.form["pmname"]
        corp_name = request.form["corporate"]
        spcl_list = request.form.getlist("specialties")
        
        print(fmnth_key,' ',product_market_name, corp_name, spcl_list)
        
        return render_template("index.html")
        
    else:
        return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)