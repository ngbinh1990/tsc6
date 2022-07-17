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

import './serviceKhac.css';

import tintuc01 from '../../assets/img/tintuc/IMAGE01.png';
import image13 from '../../assets/img/dichVu/IMAGE13.jpg';
import image14 from '../../assets/img/dichVu/IMAGE14.jpg';
import image15 from '../../assets/img/dichVu/IMAGE15.jpg';
import image16 from '../../assets/img/dichVu/IMAGE16.jpg';

const ServiceKhac = () => {
	return (
		<>
			<Container>
				<Box className='bds-khac'>
					<Grid container spacing={4}>
						<Grid item md={9}>
							<Typography
								sx={{
									margin: '10px 0px',
									fontWeight: 'bold',
									fontStyle: 'italic',
									color: 'rgb(0,166,81)',
									fontSize: '1.3rem',
								}}>
								QUẢN LÝ BẤT ĐỘNG SẢN KHÁC
							</Typography>
							<Grid container spacing={4} mt={1}>
								<Grid item md={6}>
									<Card variant='none'>
										<CardMedia
											component='img'
											height='250'
											image={image13}
											alt='green iguana'
											sx={{
												margin: '10px',
												width: '85%',
												borderRadius: '10px',
											}}
										/>
										<CardContent>
											<Typography gutterBottom variant='h6' component='div'>
												QUẢN LÝ TỔ HỢP TRUNG TÂM THƯƠNG MẠI
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={6}>
									<Card variant='none'>
										<CardMedia
											component='img'
											height='250'
											image={image14}
											alt='green iguana'
											sx={{
												margin: '10px',
												width: '85%',
												borderRadius: '10px',
											}}
										/>
										<CardContent>
											<Typography gutterBottom variant='h6' component='div'>
												QUẢN LÝ BIỆT THỰ LIỀN KỀ - SHOPHOUSE
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={6}>
									<Card variant='none'>
										<CardMedia
											component='img'
											height='250'
											image={image15}
											alt='green iguana'
											sx={{
												margin: '10px',
												width: '85%',
												borderRadius: '10px',
											}}
										/>
										<CardContent>
											<Typography gutterBottom variant='h6' component='div'>
												QUẢN LÝ CONDOTEL - KHU NGHỈ DƯỠNG
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={6}>
									<Card variant='none'>
										<CardMedia
											component='img'
											height='250'
											image={image16}
											alt='green iguana'
											sx={{
												margin: '10px',
												width: '85%',
												borderRadius: '10px',
											}}
										/>
										<CardContent>
											<Typography gutterBottom variant='h6' component='div'>
												QUẢN LÝ KHÁCH SẠN
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={3}>
							<Typography
								sx={{
									margin: '10px 0px',
									fontWeight: 'bold',
									fontStyle: 'italic',
									color: 'rgb(0,166,81)',
								}}>
								TIN NỔI BẬT
							</Typography>
							<Card>
								<CardMedia
									component='img'
									height='160'
									image={tintuc01}
									alt='green iguana'
								/>
								<CardContent>
									<Typography gutterBottom variant='h6' component='div'>
										Hoạt động ủng hộ công tác phòng chống dịch COVID - 19 của
										công ty TSC6
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										Hưởng ứng Lời kêu gọi của Đoàn Chủ tịch Ủy ban Trung ương
										MTTQ Việt Nam ngày 27/5/2021; Chương trình phát động của Uỷ
										ban MTTQ Việt Nam phường Nhân Chính và Ban quản trị nhà
										chung cư Diamond Flower.
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

export default ServiceKhac;
