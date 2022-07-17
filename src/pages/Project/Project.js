import React from 'react';
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@mui/material';

import './Project.css';
import img01 from '../../assets/img/duan/IMAGE01.png';
import img02 from '../../assets/img/duan/IMAGE02.jpg';
import img03 from '../../assets/img/duan/IMAGE03.png';
import img04 from '../../assets/img/duan/IMAGE04.png';
const Project = () => {
	return (
		<>
			<Container>
				<Box className='project'>
					<Typography
						sx={{
							margin: '10px 0px',
							fontWeight: 'bold',
							fontStyle: 'italic',
							color: 'rgb(0,166,81)',
						}}>
						HÀ NỘI
					</Typography>
					<Grid container spacing={3}>
						<Grid item md={4}>
							<Card>
								<CardMedia
									component='img'
									height='310'
									image={img01}
									alt='green iguana'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='div'>
										DIAMOND FLOWER
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										Diamond Flower là tổ hợp với căn hộ cao cấp, văn phòng, nhà
										hàng, quán café với khuôn viên đẹp. Một lợi thế của căn hộ
										là phong cách kiến trúc đa dạng, nội thất hiện đại. Bên cạnh
										đó, Ngân hàng AGRIBA
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item md={5}>
							<Card>
								<CardMedia
									component='img'
									height='340'
									image={img02}
									alt='green iguana'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='div'>
										GOLDEN PALM
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										Golden Palm là tổ hợp với căn hộ cao cấp, văn phòng, nhà
										hàng. Bên cạnh đó, Ngân hàng BIDV – ngân hàng thương mại lớn
										đã đặt trụ sở chính tại The Golden Palm.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
					<Typography
						sx={{
							marginTop: '30px',
							marginBottom: '10px',
							fontWeight: 'bold',
							fontStyle: 'italic',
							color: 'rgb(0,166,81)',
						}}>
						QUẢNG NINH
					</Typography>
					<Grid container spacing={3}>
						<Grid item md={4}>
							<Card>
								<CardMedia
									component='img'
									height='310'
									image={img04}
									alt='green iguana'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='div'>
										GREEN DIAMOND
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										Green Diamond Hạ Long là dự án căn hộ chung cư cao cấp và
										liền kề shophouse của chủ đầu tư Công ty cổ phần Đầu tư và
										Phát triển nhà số 6 Hạ Long – Handico 6.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
					<Typography
						sx={{
							marginTop: '30px',
							marginBottom: '10px',
							fontWeight: 'bold',
							fontStyle: 'italic',
							color: 'rgb(0,166,81)',
						}}>
						NHA TRANG
					</Typography>
					<Grid container spacing={3}>
						<Grid item md={4}>
							<Card>
								<CardMedia
									component='img'
									height='310'
									image={img03}
									alt='green iguana'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='div'>
										MARINA SUITES
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										Căn hộ Marina Suites Nha Trang với 3 mặt hướng ra biển Trần
										Phú Nha Trang, 1 mặt hướng vào trung tâm thành phố tạo nên
										sự giao hòa giữa thiên nhiên với con người.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
};

export default Project;
