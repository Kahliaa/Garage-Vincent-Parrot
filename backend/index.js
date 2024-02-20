const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
}));
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  key: "userId",
  secret: "secretKeyUserId",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  }
}))


const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"password",
    database:"vincentparrot",
});

app.listen(5174, () => {
    console.log("Yey, your server is running on port 5174");
});

///////ROUTES ET LOGIQUE SERVEUR -> LOGIN////////
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if(err) {
        res.send({err: err});
      }

      if (result.length > 0) {
        req.session.user = result;
        res.send(result);
      } else {
        res.send({message: "Mauvais email et/ou mot de passe !"});
      }
    }
  )
})

///////ROUTES ET LOGIQUE SERVEUR -> CAR////////
///////GET CARS////////
app.get("/cars", (req, res) => {
    db.query("SELECT * FROM cars", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

///////ADD CARS////////
app.post("/cars", (req, res) => {
    const name = req.body.name;
    const year = req.body.year;
    const description = req.body.description;
    const price = req.body.price;
    const img = req.body.img;
    const km = req.body.km;

    db.query(
        "INSERT INTO cars (name, year, description, price, img, km) VALUES (?,?,?,?,?,?)",
        [name, year, description, price, img, km],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    )
});

///////ROUTES ET LOGIQUE SERVEUR -> SERVICES////////
///////GET ALL SERVICES////////
app.get("/services", (req, res) => {
  db.query("SELECT * FROM services", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

///////GET ONE SERVICE////////
app.get("/services/:id", (req, res) => {
  const id = req.params.id

  db.query("SELECT * FROM services WHERE id = ?", [id],
    (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

///////UPDATE SERVICES////////
app.put("/updateService", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const info = req.body.info;

  db.query(
    "UPDATE services SET title = ?, info = ? WHERE id = ?",
    [title, info, id],
    (err, result) => {
      if(err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


///////ADD SERVICES////////
app.post("/services", (req, res) => {
  const img = req.body.img;
  const title = req.body.title;
  const info = req.body.title;

  db.query(
    "INSERT INTO services (img, title, info) VALUES (?,?,?)",
    [img, title, info],
    (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send("Values Inserted");
        }
    }
  )
});

///////DELETE SERVICES////////
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id

  db.query(
    "DELETE FROM services WHERE id = ?", 
    id,
    (err, result) => {
      if(err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  )
})

///////ROUTES ET LOGIQUE SERVEUR -> HOURS////////
///////GET HOURS////////
app.get("/hours", (req, res) => {
  db.query("SELECT * FROM hours", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

///////GET ONE HOUR////////
app.get("/hours/:id", (req, res) => {
  const id = req.params.id

  db.query("SELECT * FROM hours WHERE id = ?", [id],
    (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

///////ADD HOURS////////
app.post("/hours", (req, res) => {
  const day = req.body.day;
  const hourMorning = req.body.hourMorning;
  const hourEvening = req.body.hourEvening;

  db.query(
      "INSERT INTO hours (day, hourMorning, hourEvening) VALUES (?,?,?)",
      [day, hourMorning, hourEvening],
      (err, result) => {
          if(err) {
              console.log(err);
          } else {
              res.send("Values Inserted");
          }
      }
  )
});

///////UPDATE HOURS////////
app.put("/updateHour", (req, res) => {
  const id = req.body.id;
  const hourMorning = req.body.hourMorning;
  const hourEvening = req.body.hourEvening;

  db.query(
    "UPDATE hours SET hourMorning = ?, hourEvening = ? WHERE id = ?",
    [hourMorning, hourEvening, id],
    (err, result) => {
      if(err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

///////ROUTES ET LOGIQUE SERVEUR -> REVIEWS////////
///////GET REVIEWS////////
app.get("/reviews", (req, res) => {
  db.query("SELECT * FROM reviews", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

///////ADD REVIEWS////////
app.post("/reviews", (req, res) => {
  const name = req.body.name;
  const review = req.body.review;

  db.query(
      "INSERT INTO reviews (name, review) VALUES (?,?)",
      [name, review],
      (err, result) => {
          if(err) {
              console.log(err);
          } else {
              res.send("Values Inserted");
          }
      }
  )
});

///////UPDATE REVIEWS////////
app.put("/validate", (req, res) => {
  const id = req.body.id;
  const moderation = req.body.moderation;

  db.query(
    "UPDATE reviews SET moderation = ? WHERE id = ?",
    [moderation, id],
    (err, result) => {
      if(err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

///////DELETE REVIEWS////////
app.delete("/delete/reviews/:id", (req, res) => {
  const id = req.params.id

  db.query(
    "DELETE FROM reviews WHERE id = ?", 
    id,
    (err, result) => {
      if(err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

///////ROUTES ET LOGIQUE SERVEUR -> MESSAGES////////
///////PUT MESSAGE////////
app.post("/messages", (req, res) => {
  const subject = req.body.subject;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;

  db.query(
    "INSERT INTO messages (subject, firstname, lastname, email, message) VALUES (?,?,?,?,?)",
    [subject, firstName, lastName, email, message],
    (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send("Message Send");
        }
    }
  )
});

///////GET MESSAGES////////
app.get("/messages", (req, res) => {
  db.query("SELECT * FROM messages", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

///////DELETE MESSAGE////////
app.delete("/delete/messages/:id", (req, res) => {
  const id = req.params.id

  db.query(
    "DELETE FROM messages WHERE id = ?", 
    id,
    (err, result) => {
      if(err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});