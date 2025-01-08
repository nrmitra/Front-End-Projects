from flask import Flask,render_template,request, jsonify
import pandas as pd

app = Flask(__name__)

@app.route("/hello")
def home():
    return "Hello world!"

@app.route("/",methods= ["POST","GET"])
def input():
    if request.method == "POST":
        print("entered here")

        #Enter the FMNTH KEY
        fmnth_key = request.form["fmnth"]
        #file_name = request.form["filename"]
        file_name = request.form["pmname"]
        corp_name = request.form["corporate"]
        #spcl_list = request.form.getlist("specialties")

        spcl_zone_brand_standing_choice = request.form["spcl_zone_brand_standing"]
        category_molecule_standing_choice = request.form["category_molecule_standing"]
        molecule_brand_standing_choice = request.form["molecule_brand_standing"]

        pm_inputs = pd.read_excel(f"/Users/neelratanmitra/Desktop/CMARC PM Code/{file_name}.xlsx", sheet_name="PM X Specialty")
        pm_definition_df = pd.read_excel(f"/Users/neelratanmitra/Desktop/CMARC PM Code/{file_name}.xlsx", sheet_name="PD Defination")

        pm_brand_map = pm_definition_df.groupby('PM Name')['Brand Code'].apply(list).to_dict()
        pm_specialty_map = pm_inputs.groupby('PM NAME')['Specialty'].apply(list).to_dict()

        #print(pm_brand_map)
        #print(pm_specialty_map)

        for pm_name in pm_brand_map:
            spcl_list = pm_specialty_map.get(pm_name)

            #insert 'CPR' at the beginning of the list (as its a default entry)
            spcl_list.insert(0,'CPR')

            print(pm_name,' ',pm_brand_map.get(pm_name),' ',spcl_list,end="\n")
   
        #print(fmnth_key,' ',file_name, corp_name, spcl_list)

        print(spcl_zone_brand_standing_choice)
        print(category_molecule_standing_choice)
        print(molecule_brand_standing_choice)
        
        return render_template("index.html")
        
    else:
        print("entered else")
        return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)