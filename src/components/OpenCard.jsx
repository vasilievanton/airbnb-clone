import { Box, CardActionArea, CardMedia, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { addItemAction, removeItemAction } from '../store/actions';

const OpenCard = ({ img }) => {
  const selected = useSelector((state) => !!state.wishlist.items.filter((item) => item.id === img.id)[0]);
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{ overflow: 'scroll', width: '100%', maxHeight: 400, p: 3 }} multiline>
        <Typography gutterBottom variant="h5" component="div">
          {img.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {img.description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deserunt aliquam officiis incidunt aspernatur delectus ea, provident molestiae minus ut eveniet, dicta iste, nostrum saepe magnam eaque sit cumque. Delectus aliquam velit quos beatae tempora unde sit? Ducimus recusandae, vitae
          iste error sunt sed incidunt assumenda voluptatum quod corporis minus? Saepe animi voluptatibus nemo? Asperiores illum ab sint sapiente a autem, qui deleniti facilis nihil omnis ut officiis vero vel beatae voluptas iste adipisci placeat sit accusantium. Sit dolore laudantium cupiditate
          repellat quis eos tempora modi, atque ipsam autem ad itaque consequuntur deserunt culpa ratione mollitia aliquid qui quas? Inventore omnis eveniet debitis assumenda saepe odit ea consequuntur tempore sapiente eligendi iure reiciendis, magnam voluptates voluptate temporibus? Cumque eligendi
          necessitatibus magni architecto expedita, laboriosam asperiores placeat ratione quisquam, consequuntur culpa unde! Praesentium, asperiores possimus ullam dolorem magni similique libero modi doloremque delectus exercitationem pariatur totam suscipit magnam, quas laboriosam quibusdam?
          Similique quae quidem optio architecto et autem sequi sapiente labore, ad aspernatur corrupti, dolorem provident ratione magnam laborum ducimus rem aperiam officiis quia praesentium reprehenderit. Et veniam dicta distinctio vitae officiis! Nostrum quia nisi aperiam! Laboriosam dolorem ad
          commodi fugiat odio distinctio nulla velit voluptas enim totam debitis sed dolores, fugit reiciendis earum corrupti, fuga iusto perferendis provident. Consectetur blanditiis atque reprehenderit odio officia culpa officiis cum sit quaerat facilis. Modi sequi perspiciatis quaerat at ad
          doloribus, temporibus expedita quia natus ipsa ipsam recusandae eveniet commodi quae atque fugit nulla aspernatur enim ab! Debitis sapiente consequuntur autem praesentium sequi nisi qui aliquid quos, veritatis dolor at! Corporis, sunt quaerat? Modi dicta, expedita aliquid fuga minima
          magnam beatae iure quia, ea atque numquam illo dignissimos vitae aspernatur impedit sit rerum veritatis adipisci. Alias ipsam unde soluta sint. Iure, ea impedit. Iste deserunt officiis voluptates assumenda adipisci nemo eum deleniti recusandae officia, obcaecati necessitatibus a suscipit
          excepturi doloremque distinctio vero. Beatae, placeat quam? Fugiat quaerat accusantium consectetur, ut autem aperiam ab molestiae quibusdam quo recusandae. Deserunt aliquam minima optio, cum dicta tenetur, necessitatibus nisi nulla molestiae perspiciatis exercitationem quisquam nam modi
          veritatis illo quo eligendi sed quae ratione, repudiandae nobis quod! Adipisci ad nihil nobis. Totam accusamus harum ea architecto nemo ipsum hic aut sed maiores esse praesentium facilis similique eum rem, nostrum ratione, cupiditate laudantium necessitatibus dolorem. Tempora minus animi
          iusto nemo dolor vitae reiciendis odio excepturi corrupti nostrum velit fuga quae quibusdam, nisi tenetur deserunt incidunt quaerat quasi, magnam blanditiis mollitia et. Atque nam voluptas optio voluptatum numquam adipisci praesentium natus eveniet animi corrupti error laboriosam quia
          soluta ut nesciunt dolorem saepe, eligendi dicta nulla dolor quibusdam enim aut necessitatibus! Iure totam odit neque officia alias non necessitatibus molestias, impedit laudantium numquam natus repellendus exercitationem quae eaque sint consectetur quia saepe ipsum. Est quod deserunt
          nesciunt optio ipsa culpa animi mollitia iusto, tempora quos, cum id velit repudiandae, doloremque aliquam minima. Corrupti nobis quia voluptatibus esse enim officia alias, molestias odit voluptas omnis placeat eveniet eos expedita sequi ratione? Provident in, distinctio quo maiores
          corporis neque esse aliquid repudiandae mollitia!
        </Typography>
      </Box>
      <Box>
        <CardActionArea component="div">
          <Box sx={{ width: 500, height: 450, overflow: 'scroll' }}>
            <ImageList variant="quilted" cols={2} gap={5}>
              {img.urls.map((item) => (
                <ImageListItem key={item}>
                  <img src={`${item.url}?w=248&fit=crop&auto=format`} srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          <ImageListItemBar
            onClick={(e) => {
              e.stopPropagation();
              if (selected) {
                dispatch(removeItemAction(img.id));
              } else {
                dispatch(addItemAction(img));
              }
            }}
            sx={{
              background: 'none',
            }}
            position="bottom"
            actionIcon={<IconButton sx={{ color: 'white' }}>{selected ? <StarIcon /> : <StarBorderIcon />}</IconButton>}
            actionPosition="left"
          />
        </CardActionArea>
      </Box>
    </>
  );
};

export default OpenCard;
