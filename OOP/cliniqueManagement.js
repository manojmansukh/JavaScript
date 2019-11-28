//var u = require('./Utility');
var fs = require('fs');
var rl = require('readline-sync');

class Clinique {
    constructor() {
        var content = fs.readFileSync('clinique.json');
        this.data = JSON.parse(content);
    }
}

class CliniqueManage extends Clinique {
    cliniqueManagement() {
        console.log("#$ Clinique Management $#");
        console.log("1. Search Doctor\n2. Search patient\n3. Add doctor\n4. Add patient\n5. Take appointment\n6. Check specialist\n");
        var ch = rl.question("Enter your choice:");
        if (ch == 1) {
            this.searchDoctor();
        }
        else if (ch == 2) {
            this.searchPatient();
        }
        else if (ch == 3) {
            this.addDoctor();
        }
        else if (ch == 4) {
            this.addPatient();
        }
        else if (ch == 5) {
            this.appointment();
        }
        else if (ch == 6) {
            this.specialist();
        }
        else {
            console.log("Invalid key/input ");
        }
    }

    //Add doctor
    addDoctor() {

        var drName = rl.question("Enter name of the doctor:");
        var drId = rl.question("Enter doctor's id:");
        var speciality = rl.question("Enter doctor's speciality:");
        var availability = rl.question("Enter availability time of doctor as AM, PM or Both:");

        //push doctor to the json
        this.data.doctor.push({
            "drName": drName,
            "drId": drId,
            "speciality": speciality,
            "availability": availability,
            "NoOfAppointment": 0
        })
        fs.writeFileSync('clinique.json', JSON.stringify(this.data));
        this.cliniqueManagement();
    }

    //Add patient
    addPatient() {
        var pName = rl.question("Enter name of the patient:");
        var pId = rl.question("Enter patient's id:");
        var mobNo = rl.question("Enter patient's mobile number:");
        var age = rl.question("Enter patient's age:");

        //push patient to the json
        this.data.patient.push({
            "pName": pName,
            "pId": pId,
            "mobNo": mobNo,
            "age": age
        })
        fs.writeFileSync('clinique.json', JSON.stringify(this.data));
        this.cliniqueManagement();
    }

    //Take appointment
    appointment() {
        var drName = rl.question("Enter doctor's name:");
        var pName = rl.question("Enter patients name:");
        var time = rl.question("Enter appointment time as AM, PM or Both:");
        let i = -1
        for (let key in this.data.doctor) {
            if (this.data.doctor[key].drName == drName) {
                i = key;
            }
        }
        if (i != -1) {
            if (this.data.doctor[i].NoOfAppointment < 5) {
                if (this.data.doctor[i].availability == time) {
                    this.data.cliniqueAppointment.push({
                        "drName": drName,
                        "pName": pName,
                        "time": time
                    })
                    this.data.doctor[i].NoOfAppointment++;
                    console.log("Appointment booked")
                }
                else {
                    console.log("Doctor isn't available in this time")
                }
            }
            else {
                console.log("Doctor's appointments are full");
            }
        }
        else {
            console.log("Doctor not found")
        }
        fs.writeFileSync('clinique.json', JSON.stringify(this.data));
        this.cliniqueManagement();
    }

    //Serach the doctor
    searchDoctor() {

        console.log("1. Search by name\n2. Search by Id\n3. Search by speciality\n4. Search by availability\n");
        var ch = rl.question("Enter your choice:");
        switch (ch) {
            case "1":
                var drName = rl.question("Enter name of the doctor:");
                for (let i in this.data.doctor) {
                    if (this.data.doctor[i].drName == drName) {
                        console.log(this.data.doctor[i]);
                    }
                }
                break;
            case "2":
                var drId = rl.question("Enter id of the doctor:");
                for (let i in this.data.doctor) {
                    if (this.data.doctor[i].drId == drId) {
                        console.log(this.data.doctor[i]);
                    }
                }
                break;
            case "3":
                var speciality = rl.question("Enter speciality of the doctor:");
                for (let i in this.data.doctor) {
                    if (this.data.doctor[i].speciality == speciality) {
                        console.log(this.data.doctor[i]);
                    }
                }
                break;
            case "4":
                var availability = rl.question("Enter availability of the doctor:");
                for (i in this.data.doctor) {
                    if (this.data.doctor[i].availability == availability) {
                        console.log(this.data.doctor[i]);
                    }
                }
                break;
            default:
                console.log("Enter valid choice");
        }
        this.cliniqueManagement();
    }

    //Search patient
    searchPatient() {

        console.log("1. Search by name\n2. Search by Id\n3. Search by mobile number\n");
        var ch1 = rl.question("Enter your choice:");
        switch (ch1) {
            case "1":
                var pName = rl.question("Enter name of the patient:");
                for (let i in this.data.patient) {
                    if (this.data.patient[i].pName == pName) {
                        console.log(this.data.patient[i]);
                    }
                }
                break;
            case "2":
                var pId = rl.question("Enter id of the patient:");
                for (let i in this.data.patient) {
                    if (this.data.patient[i].pId == pId) {
                        console.log(this.data.patient[i]);
                    }
                }
                break;
            case "3":
                var mobNo = rl.question("Enter mobile no of the patient:");
                for (let i in this.data.patient) {
                    if (this.data.patient[i].mobNo == mobNo) {
                        console.log(this.data.patient[i]);
                    }
                }
                break;
            default:
                console.log("Enter valid choice");
        }
        this.cliniqueManagement();
    }

    //search Speciality
    specialist() {

        let speciality = rl.question("Enter speciality:");
        for (let key in this.data.doctor) {
            if (this.data.doctor[key].speciality == speciality) {
                console.log("Doctor name:" + this.data.doctor[key].drName);
                console.log("Availability:" + this.data.doctor[key].availability);
            } else {
                console.log("No doctors with this speciality");
            }
        }

        this.cliniqueManagement();
    }
}

var clinic = new CliniqueManage();
clinic.cliniqueManagement();