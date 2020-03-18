-- CREATE OR REPLACE FUNCTION fibonacci
-- (n INTEGER) 
--    RETURNS INTEGER AS 

--    $$ 
-- DECLARE
--    counter INTEGER := 0 ; 
--    i INTEGER := 0 ; 
--    j INTEGER := 1 ;
--    temp int;

-- BEGIN

--     IF (n < 1) THEN
--     RETURN 0;
-- END
-- IF; 

--     LOOP 
--         EXIT WHEN counter = n ; 
--         counter := counter + 1 ;

--         temp = i;
--         i = j;
--         j = temp + j;
-- -- select i;
-- -- SELECT j, i + j
-- -- INTO i
-- -- ,   j ;
-- END LOOP ;

-- RETURN i
-- ;
-- END ; 
-- $$ LANGUAGE plpgsql;
-- -- select jam();
-- -- SELECT jam();

-- -- select fibonacci(3);
-- -- 1 2 3 4 5 6 7  8  9  10
-- -- 1 1 2 3 5 8 13 21 34 55

-- /*

-- let i = 2, j = 4;
-- let temp = i;
-- i = j;
-- j = temp + j;
-- */

-- create or REPLACE FUNCTION fib
-- (num int)
-- RETURNS int as 
-- $fib$
-- DECLARE previous int = 1;
-- nextval int = 1;
-- counter int = 2;
-- temp int;

-- BEGIN
--     IF (num <= 0) then
--     RETURN 0;
-- end
-- if;
--     IF (num = 1) then
-- RETURN 1;
-- end
-- if;

--  IF (num = 2) then
-- RETURN 1;
-- end
-- if;

--     loop
-- exit when counter >= num;
-- temp = previous;
-- previous = nextval;
-- nextval = temp + nextval;
-- counter = counter + 1;
-- end loop;

-- RETURN nextval;
-- END;
-- $fib$ LANGUAGE plpgsql;

-- SELECT fib(7);

-- drop TABLE abc;

-- create table abc( name varchar);
-- \d abc;

-- DELETE from abc WHERE NAME = 'OLA';
-- alter table articles alter category type varchar[] using category::varchar[];
-- alter table abc alter name type varchar ; -- using name::CHARACTER VARYING;
-- \d abc;

-- insert into abc
-- values
-- ('lala');

-- insert into abc VALUES(array['ade',     'fake']);
-- insert into abc VALUES('OLA');

-- select * from abc;

-- select * from abc where 'fak' = any(name);

-- \d articles;

-- select * from articles;