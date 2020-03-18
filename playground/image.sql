-- -- create extension "uuid-ossp";
-- -- select uuid_generate_v4();

-- -- drop table image;

-- -- create table image (
-- --     id uuid default uuid_generate_v4(),
-- --     img bytea
-- -- );

-- -- insert into image default values;

-- -- select * from IMAGE;

-- -- create table abc(id int);


-- -- drop FUNCTION jam;
-- create  or replace FUNCTION jam(val int) RETURNs integer as $jam$
-- declare 
--     counter real = 1;
--     randText text := 'default text';
-- BEGIN
-- counter = val*5;
-- raise notice 'hello world %, %, %', val, counter, randText;
-- -- perform 998;
-- RETURN val+6;
-- insert into abc VALUES(val);
-- end;

-- $jam$  LANGUAGE plpgsql;

-- SELECT jam(2);
-- select * from abc;

-- -- create or replace function img_import(filename text)
-- --   returns void
-- --   volatile
-- --   as $$
-- --     declare
-- --         content_ bytea;
-- --         loid oid;
-- --         lfd integer;
-- --         lsize integer;
-- --     begin
-- --         loid := lo_import(filename);
-- --         lfd := lo_open(loid,131072);
-- --         lsize := lo_lseek(lfd,0,2);
-- --         perform lo_lseek(lfd,0,0);
-- --         content_ := loread(lfd,lsize);
-- --         perform lo_close(lfd);
-- --         perform lo_unlink(loid);

-- --     insert into image values(
-- --     -- uuid('66032153-0afc-4124-a50a-c4ea386f4684'), 
-- --     uuid_generate_v4(),
-- --     -- now(),
-- --     content_);
-- --     end;
-- -- $$ language plpgsql;

-- -- -- /home/jamiu/Desktop/playground_andela/playground/love.jpeg

-- -- -- SELECT img_import('/home/jamiu/Desktop/playground_andela/playground/love.jpeg');
-- -- SELECT * from IMAGE;

-- -- -- create table taha(id int);
-- select * from taha;
-- -- drop function jbaba;
-- create or replace function jbaba(name int)
-- RETURNS INT
-- as $jbaba$

-- declare 
--    quest text;
--    ans text; 
-- BEGIN
-- quest 'what is your name',
-- ans 'Tunde'

-- RETURN name quest;
-- insert into taha values(name);
-- END;
        
-- $jbaba$ LANGUAGE plpgsql;
-- select jbaba(2);


-- how to upload image using nodejs server
-- how to upload image in postgres
-- public/img/uuid-face.jpeg

-- public/img/uuid1/uuui-face.jpeg