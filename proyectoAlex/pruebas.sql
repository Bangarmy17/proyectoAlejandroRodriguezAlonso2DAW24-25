use tiendaRopa;
SELECT * 
FROM usuario;

SELECT *
FROM producto;

SELECT *
FROM usuario AS u
WHERE u.id = 1;

SELECT u.email, u.userName, u.password
FROM usuario AS U;