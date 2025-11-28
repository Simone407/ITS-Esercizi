from catalogofilm import MovieCatalog


catalog: MovieCatalog = MovieCatalog()

catalog.add_movie("Steven Spielberg", ["Casper","Ritorno al futuro"])

catalog.add_movie("Steven Spielberg",["E.T."])

print(catalog.getCatalog())

catalog.add_movie("Quentin Tarantino",["Pulp fiction","Kill Bill"])

print(catalog.getCatalog())

catalog.remove_movie("Steven Spielberg","E.T.")

print(catalog.getCatalog())

catalog.remove_movie("Steven Spielberg","Ritorno al futuro")

print(catalog.getCatalog())

catalog.remove_movie("Steven Spielberg","Casper")

print(catalog.getCatalog())



print(catalog.list_directors())