SELECT * FROM mydatabase.answer;

my $dsn = “DBI:SQLite:hangman.sqlite”;
my %attr = (PrintError=>0, RaiseError=>1);
# connect to the database
my $dbh = DBI->connect($dsn, \%attr);
Finally, I’ll set up my table:
$dbh->do(‘PRAGMA foreign_keys = ON’);
$dbh->do(‘PRAGMA foreign_keys’);
my @ddl = (
‘CREATE TABLE GUESSEDWORDS (
id INTEGER UNIQUE NOT NULL,
WORD TEXT,
REMAINING_GUESSES INTEGER,
CORRECT INTEGER,
INCORRECT INTEGER,
GUESSED_LETTERS TEXT,
RIGHT_LETTERS TEXT,
WRONG_LETTERS TEXT,
REMAINING_LETTERS TEXT,
GUESSED_WORD TEXT
PRIMARY KEY(id)
)’,
);
for my $sql (@ddl) {
$dbh->do($sql);
}

const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user:"root",
    password: "avishek",
    database: "test",
    connectionLimit: 10
})

pool.query ('select * from question', (err, result, feilds)=> {
         if (err){
            return console.log(err);

         }

         return console.log(result);
})

pool.query ('select * from answer', (err, result, feilds)=> {
    if (err){
       return console.log(err);

    }

    return console.log(result);
})

my $length = length $xr;
my @array = split //, $xr;
my @array2 = ();
foreach my $x (@array) {
push @array2, “_”
};
my $str = join ‘ ‘, @array2;