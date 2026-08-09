// Admission Info Sessions data — pulled live August 8, 2026.
// Each entry: d (ISO date), c (city), s (state code), t (event title),
// o (host organization), m (meta: time/venue), u (link)
var SESSIONS = [
  { d: "2026-08-08", c: "Chicago", s: "IL", t: "Info Session & College Fair", o: "Colleges That Change Lives", m: "40+ member colleges", u: "https://ctcl.org/chicago-il-august-8-2026/" },
  { d: "2026-08-09", c: "Minneapolis", s: "MN", t: "Info Session & College Fair", o: "Colleges That Change Lives", m: "40+ member colleges", u: "https://ctcl.org/minneapolis-mn-august-2026/" },
  { d: "2026-08-10", c: "Denver", s: "CO", t: "Info Session & College Fair", o: "Colleges That Change Lives", m: "40+ member colleges", u: "https://ctcl.org/denver-august-2026/" },
  { d: "2026-08-11", c: "Salt Lake City", s: "UT", t: "Info Session & College Fair", o: "Colleges That Change Lives", m: "40+ member colleges", u: "https://ctcl.org/salt-lake-city-august-11-2026/" },
  { d: "2026-08-15", c: "Houston", s: "TX", t: "Info Session & College Fair", o: "Colleges That Change Lives", m: "40+ member colleges", u: "https://ctcl.org/houston-august-2026/" },
  { d: "2026-08-15", c: "Austin", s: "TX", t: "Info Session & College Fair", o: "Colleges That Change Lives", m: "40+ member colleges", u: "https://ctcl.org/austin-august-2026/" },
  { d: "2026-08-16", c: "Dallas – Fort Worth", s: "TX", t: "Info Session & College Fair", o: "Colleges That Change Lives", m: "40+ member colleges", u: "https://ctcl.org/dallas-august-2026/" },
  { d: "2026-08-17", c: "Dallas – Fort Worth", s: "TX", t: "Counselor Breakfast & Roundtable", o: "Colleges That Change Lives", m: "For school counselors & IECs", u: "https://ctcl.org/dallas-fort-worth-counselor-breakfast-august-17-2026/" },
  { d: "2026-08-29", c: "Dallas", s: "TX", t: "Discover USC", o: "USC", m: "1:00–3:00 PM", u: "https://applyto.usc.edu/portal/discoveruscevents?tab=off-campus" },
  { d: "2026-08-30", c: "Houston", s: "TX", t: "Discover USC", o: "USC", m: "2:00–4:00 PM", u: "https://applyto.usc.edu/portal/discoveruscevents?tab=off-campus" },
  { d: "2026-09-13", c: "Seattle", s: "WA", t: "Discover USC", o: "USC", m: "2:00–4:00 PM", u: "https://applyto.usc.edu/portal/discoveruscevents?tab=off-campus" },
  { d: "2026-09-19", c: "Chicago", s: "IL", t: "Discover USC", o: "USC", m: "3:00–5:00 PM", u: "https://applyto.usc.edu/portal/discoveruscevents?tab=off-campus" },
  { d: "2026-09-24", c: "Boston", s: "MA", t: "Discover USC", o: "USC", m: "7:00–9:00 PM", u: "https://applyto.usc.edu/portal/discoveruscevents?tab=off-campus" },
  { d: "2026-09-26", c: "Fort Lauderdale", s: "FL", t: "Discover USC", o: "USC", m: "1:00–3:00 PM", u: "https://applyto.usc.edu/portal/discoveruscevents?tab=off-campus" },
  { d: "2026-09-26", c: "New York", s: "NY", t: "Discover USC", o: "USC", m: "1:00–3:00 PM", u: "https://applyto.usc.edu/portal/discoveruscevents?tab=off-campus" },
  { d: "2026-09-27", c: "Atlanta", s: "GA", t: "Discover USC", o: "USC", m: "3:00–5:00 PM", u: "https://applyto.usc.edu/portal/discoveruscevents?tab=off-campus" },
  { d: "2026-09-27", c: "Washington", s: "DC", t: "Discover USC", o: "USC", m: "3:00–5:00 PM", u: "https://applyto.usc.edu/portal/discoveruscevents?tab=off-campus" },
  { d: "2026-10-03", c: "Honolulu", s: "HI", t: "Discover USC", o: "USC", m: "11:00 AM–1:00 PM", u: "https://applyto.usc.edu/portal/discoveruscevents?tab=off-campus" },
  { d: "2026-08-17", c: "Boston", s: "MA", t: "Meet GW in Boston", o: "George Washington University", m: "6:00 PM · Museum of Science", u: "https://ugadmissions.gwu.edu/portal/gwotr" },
  { d: "2026-08-18", c: "New York", s: "NY", t: "Meet GW in NYC", o: "George Washington University", m: "6:00 PM · Blender Space", u: "https://ugadmissions.gwu.edu/portal/gwotr" },
  { d: "2026-08-19", c: "Northern NJ", s: "NJ", t: "Destination DC: DC Comes to Northern NJ", o: "George Washington University", m: "7:00 PM · Montclair Film (joint w/ American, George Mason, Howard)", u: "https://ugadmissions.gwu.edu/portal/gwotr" },
  { d: "2026-08-26", c: "Orange County", s: "CA", t: "Meet GW & East Coast Colleges", o: "George Washington University", m: "6:00 PM · Aliso Viejo Country Club (joint w/ American, Elon, Lehigh)", u: "https://ugadmissions.gwu.edu/portal/gwotr" },
  { d: "2026-09-01", c: "Atlanta", s: "GA", t: "Destination DC: DC Comes to Atlanta", o: "George Washington University", m: "6:00 PM · Woodruff Arts Center (joint w/ American, George Mason, Howard, Maryland)", u: "https://ugadmissions.gwu.edu/portal/gwotr" },
  { d: "2026-08-19", c: "Lafayette", s: "LA", t: "Information Session", o: "Tulane University", m: "6:30 PM · DoubleTree by Hilton Lafayette", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-08-20", c: "Lake Charles", s: "LA", t: "Information Session", o: "Tulane University", m: "5:30 PM · Calcasieu Parish Public Library", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-08-20", c: "Baton Rouge", s: "LA", t: "Information Session", o: "Tulane University", m: "6:30 PM · EBRPL Bluebonnet Regional Branch", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-08-25", c: "Monroe", s: "LA", t: "Information Session", o: "Tulane University", m: "6:30 PM · Home2 Suites West Monroe", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-08-26", c: "Shreveport", s: "LA", t: "Information Session", o: "Tulane University", m: "5:45 PM · Shreve Memorial Library", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-08-27", c: "Alexandria", s: "LA", t: "Information Session", o: "Tulane University", m: "5:00 PM · Alexandria Museum of Art", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-01", c: "Atlanta", s: "GA", t: "Information Session", o: "Tulane University", m: "6:00 PM · Atlanta International School", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-08", c: "Birmingham", s: "AL", t: "Information Session", o: "Tulane University", m: "6:30 PM · Birmingham Museum of Art", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-08", c: "Raleigh/Durham", s: "NC", t: "Information Session", o: "Tulane University", m: "6:00 PM · Durham Convention Center", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-08", c: "Nashville", s: "TN", t: "Information Session", o: "Tulane University", m: "7:00 PM · Courtyard Nashville Green Hills", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-09", c: "Kansas City", s: "MO", t: "Information Session", o: "Tulane University", m: "5:00 PM · Kansas City Marriott Country Club Plaza", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-10", c: "Charlotte", s: "NC", t: "Information Session", o: "Tulane University", m: "6:30 PM · Charlotte Marriott SouthPark", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-15", c: "Saint Louis", s: "MO", t: "Information Session", o: "Tulane University", m: "6:30 PM · Hilton St. Louis Frontenac", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-15", c: "Princeton", s: "NJ", t: "Information Session", o: "Tulane University", m: "6:30 PM · The Westin Princeton at Forrestal Village", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-16", c: "Memphis", s: "TN", t: "Information Session", o: "Tulane University", m: "7:00 PM · Lichterman Nature Center", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-17", c: "Dallas (Arlington)", s: "TX", t: "Information Session", o: "Tulane University", m: "7:00 PM · Hilton Arlington", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-17", c: "Pasadena", s: "CA", t: "Information Session", o: "Tulane University", m: "7:00 PM · Hilton Pasadena", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-22", c: "Essex County", s: "NJ", t: "Information Session", o: "Tulane University", m: "6:30 PM · The MC Hotel, Autograph Collection", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-24", c: "Morristown", s: "NJ", t: "Information Session", o: "Tulane University", m: "6:30 PM · Bickford Theatre at Morris Museum", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-27", c: "Houston", s: "TX", t: "Information Session", o: "Tulane University", m: "3:00 PM · The Laura Hotel", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-27", c: "Denver", s: "CO", t: "Information Session", o: "Tulane University", m: "7:00 PM · Denver Art Museum", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-27", c: "Bethesda", s: "MD", t: "Information Session", o: "Tulane University", m: "3:00 PM · Hyatt Regency Bethesda", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-30", c: "Northwest Arkansas", s: "AR", t: "Information Session", o: "Tulane University", m: "6:30 PM · Courtyard Bentonville Rogers", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-01", c: "Minneapolis", s: "MN", t: "Information Session", o: "Tulane University", m: "6:30 PM · Minneapolis Institute of Art", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-04", c: "San Antonio", s: "TX", t: "Information Session", o: "Tulane University", m: "6:30 PM · Witte Museum", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-04", c: "Mobile", s: "AL", t: "Information Session", o: "Tulane University", m: "6:30 PM · Renaissance Mobile Riverview Plaza", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-04", c: "Los Angeles", s: "CA", t: "Information Session", o: "Tulane University", m: "2:00 PM · Santa Monica High School", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-04", c: "Chicago", s: "IL", t: "Information Session", o: "Tulane University", m: "2:00 PM · Renaissance Chicago O'Hare Suites", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-04", c: "Boston", s: "MA", t: "Information Session", o: "Tulane University", m: "4:00 PM · Hilton Boston Park Plaza", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-04", c: "New York", s: "NY", t: "Information Session", o: "Tulane University", m: "1:30 PM · New York Marriott Downtown", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-04", c: "Tysons Corner", s: "VA", t: "Information Session", o: "Tulane University", m: "3:00 PM · Tysons Corner Marriott", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-07", c: "Baltimore", s: "MD", t: "Information Session", o: "Tulane University", m: "6:00 PM · Baltimore Marriott Waterfront", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-08", c: "Austin", s: "TX", t: "Information Session", o: "Tulane University", m: "6:30 PM · Hyatt Regency Austin", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-11", c: "Fort Lauderdale", s: "FL", t: "Information Session", o: "Tulane University", m: "2:00 PM · Courtyard Fort Lauderdale North", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-13", c: "Orange County", s: "CA", t: "Information Session", o: "Tulane University", m: "7:00 PM · Hyatt Regency Newport Beach", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-13", c: "Palo Alto", s: "CA", t: "Information Session", o: "Tulane University", m: "7:00 PM · Palo Alto Art Center", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-14", c: "San Diego", s: "CA", t: "Information Session", o: "Tulane University", m: "7:00 PM · Courtyard San Diego Central", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-14", c: "Miami", s: "FL", t: "Information Session", o: "Tulane University", m: "7:00 PM · Miami Marriott Biscayne Bay", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-15", c: "Phoenix", s: "AZ", t: "Information Session", o: "Tulane University", m: "6:00 PM · Renaissance Phoenix Downtown", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-15", c: "Detroit", s: "MI", t: "Information Session", o: "Tulane University", m: "6:30 PM · Detroit Institute of Arts", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-18", c: "San Francisco", s: "CA", t: "Information Session", o: "Tulane University", m: "3:00 PM · San Francisco Marriott Union Square", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-18", c: "Stamford", s: "CT", t: "Information Session", o: "Tulane University", m: "6:00 PM · Stamford Museum & Nature Center", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-18", c: "Long Island", s: "NY", t: "Information Session", o: "Tulane University", m: "5:00 PM · Marriott Melville Long Island", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-19", c: "Westchester", s: "NY", t: "Information Session", o: "Tulane University", m: "6:30 PM · Westchester Marriott", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-19", c: "Philadelphia", s: "PA", t: "Information Session", o: "Tulane University", m: "7:00 PM · The Study at University City", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-19", c: "Seattle", s: "WA", t: "Information Session", o: "Tulane University", m: "6:30 PM · Seattle Marriott Bellevue", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-20", c: "Hartford", s: "CT", t: "Information Session", o: "Tulane University", m: "6:00 PM · The Goodwin Hotel", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-20", c: "Cincinnati", s: "OH", t: "Information Session", o: "Tulane University", m: "6:30 PM · Walnut Hills Branch Library", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-20", c: "Puerto Rico", s: "PR", t: "Information Session", o: "Tulane University", m: "7:00 PM · Colegio Puertorriqueno De Ninas", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-22", c: "Portland", s: "OR", t: "Information Session", o: "Tulane University", m: "6:30 PM · Embassy Suites Portland Downtown", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-09-29", c: "Richmond", s: "VA", t: "Information Session", o: "Tulane University", m: "6:00 PM · Saint Catherines School", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-25", c: "Cleveland", s: "OH", t: "Information Session", o: "Tulane University", m: "5:00 PM · Orange High School", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-10-26", c: "Pittsburgh", s: "PA", t: "Information Session", o: "Tulane University", m: "7:00 PM · The Westin Pittsburgh", u: "https://apply.tulane.edu/portal/tulanecomestoyou" },
  { d: "2026-08-16", c: "Pasadena", s: "CA", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Polytechnic School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-16", c: "Detroit", s: "MI", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Cranbrook Kingswood School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-16", c: "Raleigh/Durham", s: "NC", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Durham Academy Middle School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-16", c: "Boston", s: "MA", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Beaver Country Day School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-16", c: "Chattanooga", s: "TN", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Signal Mountain Middle-High School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-17", c: "Birmingham", s: "AL", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Homewood High School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-17", c: "Orange County", s: "CA", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Saint Margaret's Episcopal School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-17", c: "Greenwich", s: "CT", t: "Road Show", o: "Vanderbilt University", m: "6:00 PM · Greenwich Academy", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-17", c: "Atlanta", s: "GA", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Riverwood International Charter School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-17", c: "North Chicago", s: "IL", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Francis W. Parker School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-17", c: "Bethesda", s: "MD", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Georgetown Preparatory School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-18", c: "San Diego", s: "CA", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Saint Augustine High School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-18", c: "Wilmington", s: "DE", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Tower Hill School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-18", c: "Chicago (Naperville)", s: "IL", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Chicago Marriott Naperville", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-18", c: "North Jersey", s: "NJ", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Delbarton School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-19", c: "Las Vegas", s: "NV", t: "Road Show", o: "Vanderbilt University", m: "6:30 PM · Coronado High School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-19", c: "Manhattan", s: "NY", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Jay Conference Chelsea", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-19", c: "Philadelphia", s: "PA", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Germantown Friends School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-19", c: "Greenville", s: "SC", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · St. Joseph's Catholic School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-19", c: "Milwaukee", s: "WI", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · St. Joan Antida High School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-20", c: "Phoenix", s: "AZ", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · BASIS Scottsdale", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-20", c: "Minneapolis", s: "MN", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Breck School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-20", c: "Princeton", s: "NJ", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · The Pennington School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-20", c: "Long Island", s: "NY", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Syosset High School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-20", c: "Charlotte", s: "NC", t: "Road Show", o: "Vanderbilt University", m: "7:00 PM · Charlotte Country Day School", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-08-31", c: "Puerto Rico", s: "PR", t: "Davidson, Haverford & Vanderbilt Joint Info Session", o: "Vanderbilt University", m: "6:30 PM · Baldwin School Of Puerto Rico", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-09-14", c: "Rochester", s: "NY", t: "Road Show", o: "Vanderbilt University", m: "5:00 PM · Henrietta Public Library", u: "https://myappvu.vanderbilt.edu/portal/roadshow" },
  { d: "2026-09-11", c: "Nashville", s: "TN", t: "National College Fair", o: "NACAC College Fairs", m: "6:00–8:00 PM", u: "https://www.nacacattend.org/26Nashville" },
  { d: "2026-09-19", c: "Dallas", s: "TX", t: "National College Fair", o: "NACAC College Fairs", m: "1:00–4:00 PM · 175–400 colleges represented", u: "https://www.nacacattend.org/26Dallas" },
  { d: "2026-09-22", c: "Louisville", s: "KY", t: "National College Fair", o: "NACAC College Fairs", m: "2 sessions: 9:00 AM–12:00 PM & 6:00–8:00 PM", u: "https://www.nacacattend.org/26Louisville" },
  { d: "2026-09-26", c: "Jacksonville", s: "FL", t: "National College Fair", o: "NACAC College Fairs", m: "9:00 AM–1:00 PM", u: "https://www.nacacattend.org/26Jacksonville" },
  { d: "2026-09-26", c: "Chicago", s: "IL", t: "National College Fair", o: "NACAC College Fairs", m: "11:00 AM–3:00 PM", u: "https://www.nacacattend.org/26Chicago" },
  { d: "2026-09-27", c: "Birmingham", s: "AL", t: "National College Fair", o: "NACAC College Fairs", m: "1:00–4:00 PM", u: "https://www.nacacattend.org/26Birmingham" },
  { d: "2026-09-27", c: "Greater Phoenix", s: "AZ", t: "National College Fair", o: "NACAC College Fairs", m: "11:00 AM–3:00 PM", u: "https://www.nacacattend.org/26GreaterPhoenix" },
  { d: "2026-09-27", c: "Milwaukee", s: "WI", t: "National College Fair", o: "NACAC College Fairs", m: "11:00 AM–2:00 PM", u: "https://www.nacacattend.org/26Milwaukee" },
  { d: "2026-09-29", c: "Honolulu", s: "HI", t: "National College Fair", o: "NACAC College Fairs", m: "2 sessions: 8:30–11:30 AM & 5:00–8:00 PM", u: "https://www.nacacattend.org/26Honolulu" },
  { d: "2026-09-29", c: "Boise", s: "ID", t: "National College Fair", o: "NACAC College Fairs", m: "2 sessions: 9:00 AM–2:00 PM & 6:00–8:00 PM", u: "https://www.nacacattend.org/26Boise" },
  { d: "2026-10-03", c: "Fort Lauderdale", s: "FL", t: "National College Fair", o: "NACAC College Fairs", m: "1:00–4:00 PM", u: "https://www.nacacattend.org/26GreaterFortLauderdale" },
  { d: "2026-10-04", c: "Long Island", s: "NY", t: "National College Fair", o: "NACAC College Fairs", m: "11:00 AM–3:00 PM", u: "https://www.nacacattend.org/26LongIsland" },
  { d: "2026-10-04", c: "Orlando", s: "FL", t: "National College Fair", o: "NACAC College Fairs", m: "1:00–4:00 PM", u: "https://www.nacacattend.org/26Orlando" },
  { d: "2026-10-04", c: "New Orleans", s: "LA", t: "National College Fair", o: "NACAC College Fairs", m: "1:00–4:00 PM", u: "https://www.nacacattend.org/26NewOrleans" },
  { d: "2026-10-05", c: "Minnesota", s: "MN", t: "National College Fair", o: "NACAC College Fairs", m: "3 sessions, Oct 5–6", u: "https://www.nacacattend.org/26Minnesota" },
  { d: "2026-10-06", c: "Kansas City", s: "MO", t: "National College Fair", o: "NACAC College Fairs", m: "2 sessions: 8:30–11:30 AM & 5:00–7:00 PM", u: "https://www.nacacattend.org/26KansasCity" },
  { d: "2026-10-06", c: "Baton Rouge", s: "LA", t: "National College Fair", o: "NACAC College Fairs", m: "2 sessions: 9:00 AM–12:00 PM & 6:00–8:00 PM", u: "https://www.nacacattend.org/26BatonRouge" },
  { d: "2026-10-10", c: "Philadelphia", s: "PA", t: "National College Fair", o: "NACAC College Fairs", m: "11:00 AM–3:00 PM", u: "https://www.nacacattend.org/26Philadelphia" },
  { d: "2026-10-13", c: "Spokane", s: "WA", t: "National College Fair", o: "NACAC College Fairs", m: "2 sessions: 9:00 AM–12:00 PM & 6:00–8:00 PM", u: "https://www.nacacattend.org/26Spokane" },
  { d: "2026-10-16", c: "Seattle", s: "WA", t: "National College Fair", o: "NACAC College Fairs", m: "2 sessions, Oct 16–17", u: "https://www.nacacattend.org/26Seattle" },
  { d: "2026-10-17", c: "Denver", s: "CO", t: "National College Fair", o: "NACAC College Fairs", m: "1:00–4:00 PM", u: "https://www.nacacattend.org/26Denver" },
  { d: "2026-10-18", c: "New York", s: "NY", t: "Performing & Visual Arts Fair", o: "NACAC College Fairs", m: "4:00–6:00 PM", u: "https://www.nacacattend.org/26PVANewYorkCity" },
  { d: "2026-10-18", c: "Cincinnati", s: "OH", t: "National College Fair", o: "NACAC College Fairs", m: "1:00–4:00 PM", u: "https://www.nacacattend.org/26GreaterCincinnati" },
  { d: "2026-10-18", c: "Portland", s: "OR", t: "National College Fair", o: "NACAC College Fairs", m: "2 sessions, Oct 18–19", u: "https://www.nacacattend.org/26Portland" },
  { d: "2026-10-21", c: "Baltimore", s: "MD", t: "National College Fair", o: "NACAC College Fairs", m: "2 sessions: 9:00 AM–12:00 PM & 6:00–8:00 PM", u: "https://www.nacacattend.org/26Baltimore" },
  { d: "2026-10-25", c: "Boston", s: "MA", t: "STEM College & Career Fair", o: "NACAC College Fairs", m: "1:00–4:00 PM", u: "https://www.nacacattend.org/26STEMBoston" },
  { d: "2026-10-25", c: "Saint Louis", s: "MO", t: "National College Fair", o: "NACAC College Fairs", m: "1:00–4:00 PM", u: "https://www.nacacattend.org/26SaintLouis" },
  { d: "2026-10-28", c: "Atlantic City", s: "NJ", t: "National College Fair", o: "NACAC College Fairs", m: "2 sessions: 9:00 AM–12:00 PM & 6:00–8:00 PM", u: "https://www.nacacattend.org/26AtlanticCity" },
  { d: "2026-11-01", c: "Houston", s: "TX", t: "STEM College & Career Fair", o: "NACAC College Fairs", m: "1:00–4:00 PM", u: "https://www.nacacattend.org/26STEMHouston" },
  { d: "2026-11-14", c: "New Jersey", s: "NJ", t: "STEM College & Career Fair", o: "NACAC College Fairs", m: "1:00–4:00 PM", u: "https://www.nacacattend.org/26STEMNewJersey" }
];

var STATE_NAMES = {
  AL: "Alabama", AZ: "Arizona", AR: "Arkansas", CA: "California", CO: "Colorado",
  CT: "Connecticut", DE: "Delaware", DC: "Washington D.C.", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", KY: "Kentucky", LA: "Louisiana",
  MD: "Maryland", MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MO: "Missouri",
  NV: "Nevada", NJ: "New Jersey", NY: "New York", NC: "North Carolina", OH: "Ohio",
  OR: "Oregon", PA: "Pennsylvania", PR: "Puerto Rico", SC: "South Carolina", TN: "Tennessee",
  TX: "Texas", UT: "Utah", VA: "Virginia", WA: "Washington", WI: "Wisconsin"
};

var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var ORG_LOGOS = {
  "USC": "https://admission.usc.edu/wp-content/themes/usc-communications-2023/favicon/apple-touch-icon.png",
  "George Washington University": "https://ugadmissions-gwu-edu.cdn.technolutions.net/dev/modules/custom/gwu_blocks/images/gw-header-image-53.png",
  "Tulane University": "https://apply-tulane-edu.cdn.technolutions.net/shared/tu_new_shield.svg",
  "Vanderbilt University": "https://cdn.vanderbilt.edu/vu-futurevu/static/img/favicons/favicon-on-light.png",
  "Colleges That Change Lives": "https://ctcl.org/wp-content/uploads/2024/07/CTCL-Logo-Downsized.jpg",
  "NACAC College Fairs": "https://assets.swoogo.com/uploads/medium/2173283-6363f8e80192a.png"
};

document.addEventListener('DOMContentLoaded', function () {
  var stateSelect = document.getElementById('state-filter');
  var collegeSelect = document.getElementById('college-filter');
  var cityFilterEl = document.getElementById('city-filter');
  var resultsEl = document.getElementById('session-results');
  var emptyEl = document.getElementById('session-empty');
  if (!stateSelect || !collegeSelect || !cityFilterEl || !resultsEl) return;

  var activeCity = 'All';

  function statesForCollege(college) {
    var subset = college ? SESSIONS.filter(function (ev) { return ev.o === college; }) : SESSIONS;
    var out = [];
    subset.forEach(function (ev) { if (out.indexOf(ev.s) === -1) out.push(ev.s); });
    out.sort(function (a, b) { return STATE_NAMES[a].localeCompare(STATE_NAMES[b]); });
    return out;
  }

  function collegesForState(state) {
    var subset = state ? SESSIONS.filter(function (ev) { return ev.s === state; }) : SESSIONS;
    var out = [];
    subset.forEach(function (ev) { if (out.indexOf(ev.o) === -1) out.push(ev.o); });
    out.sort();
    return out;
  }

  function populateStateSelect(college, preferredState) {
    var list = statesForCollege(college);
    stateSelect.innerHTML = '';
    var allOpt = document.createElement('option');
    allOpt.value = '';
    allOpt.textContent = 'All states';
    stateSelect.appendChild(allOpt);
    list.forEach(function (code) {
      var opt = document.createElement('option');
      opt.value = code;
      opt.textContent = STATE_NAMES[code];
      stateSelect.appendChild(opt);
    });
    var target;
    if (preferredState === '' || list.indexOf(preferredState) !== -1) {
      target = preferredState;
    } else {
      target = list.indexOf('TX') !== -1 ? 'TX' : list[0];
    }
    stateSelect.value = target;
    return target;
  }

  function populateCollegeSelect(state, preferredCollege) {
    var list = collegesForState(state);
    collegeSelect.innerHTML = '';
    var allOpt = document.createElement('option');
    allOpt.value = '';
    allOpt.textContent = 'All colleges & fairs';
    collegeSelect.appendChild(allOpt);
    list.forEach(function (name) {
      var opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name;
      collegeSelect.appendChild(opt);
    });
    var target = list.indexOf(preferredCollege) !== -1 ? preferredCollege : '';
    collegeSelect.value = target;
    return target;
  }

  function formatDate(iso) {
    var parts = iso.split('-');
    var month = MONTHS[parseInt(parts[1], 10) - 1];
    var day = parseInt(parts[2], 10);
    return { month: month, day: day };
  }

  function renderCityFilter(state) {
    cityFilterEl.innerHTML = '';
    activeCity = 'All';
    if (!state) return;
    var cities = [];
    SESSIONS.forEach(function (ev) {
      if (ev.s === state && cities.indexOf(ev.c) === -1) cities.push(ev.c);
    });
    cities.sort();
    if (cities.length <= 1) {
      activeCity = 'All';
      return;
    }
    if (cities.indexOf(activeCity) === -1) activeCity = 'All';

    var allPill = document.createElement('span');
    allPill.className = 'session-filter' + (activeCity === 'All' ? ' active' : '');
    allPill.textContent = 'All cities';
    allPill.addEventListener('click', function () {
      activeCity = 'All';
      renderCityFilter(stateSelect.value);
      renderResults();
    });
    cityFilterEl.appendChild(allPill);

    cities.forEach(function (city) {
      var pill = document.createElement('span');
      pill.className = 'session-filter' + (activeCity === city ? ' active' : '');
      pill.textContent = city;
      pill.addEventListener('click', function () {
        activeCity = city;
        renderCityFilter(stateSelect.value);
        renderResults();
      });
      cityFilterEl.appendChild(pill);
    });
  }

  function renderResults() {
    var state = stateSelect.value;
    var college = collegeSelect.value;
    var filtered = SESSIONS.filter(function (ev) {
      if (state && ev.s !== state) return false;
      if (college && ev.o !== college) return false;
      if (activeCity !== 'All' && ev.c !== activeCity) return false;
      return true;
    });
    filtered.sort(function (a, b) { return a.d.localeCompare(b.d); });

    resultsEl.innerHTML = '';
    if (filtered.length === 0) {
      emptyEl.style.display = 'block';
      return;
    }
    emptyEl.style.display = 'none';

    filtered.forEach(function (ev) {
      var date = formatDate(ev.d);
      var logo = ORG_LOGOS[ev.o];
      var item = document.createElement('div');
      item.className = 'session-item';
      item.innerHTML =
        '<div class="session-date"><div class="month">' + date.month + '</div><div class="day">' + date.day + '</div></div>' +
        '<div class="session-body">' +
        '<div class="session-title">' + ev.c + ', ' + ev.s + ' — ' + ev.t + '</div>' +
        '<div class="session-meta">' + ev.o + (ev.m ? ' · ' + ev.m : '') + '</div>' +
        '<a class="session-link" href="' + ev.u + '" target="_blank" rel="noopener">View details →</a>' +
        '</div>' +
        (logo ? '<div class="session-logo"><img src="' + logo + '" alt="' + ev.o + ' logo" loading="lazy" onerror="this.parentElement.style.display=\'none\'"></div>' : '');
      resultsEl.appendChild(item);
    });
  }

  stateSelect.addEventListener('change', function () {
    var newState = stateSelect.value;
    var college = populateCollegeSelect(newState, collegeSelect.value);
    populateStateSelect(college, newState);
    activeCity = 'All';
    renderCityFilter(stateSelect.value);
    renderResults();
  });

  collegeSelect.addEventListener('change', function () {
    var newCollege = collegeSelect.value;
    var state = populateStateSelect(newCollege, stateSelect.value);
    populateCollegeSelect(state, newCollege);
    activeCity = 'All';
    renderCityFilter(stateSelect.value);
    renderResults();
  });

  var initState = populateStateSelect('', 'TX');
  populateCollegeSelect(initState, '');
  renderCityFilter(initState);
  renderResults();
});
