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

import './nhatrang.css';

import tintuc01 from '../../assets/img/tintuc/IMAGE01.png';
import img03 from '../../assets/img/duan/IMAGE03.png';

const Nhatrang = () => {
	return (
		<>
			<Container>
				<Box className='nhatrang'>
					<Grid container spacing={2}>
						<Grid item md={9}>
							<Typography
								sx={{
									margin: '10px 0px',
									fontWeight: 'bold',
									fontStyle: 'italic',
									color: 'rgb(0,166,81)',
								}}>
								NHA TRANG
							</Typography>
							<Grid container spacing={3}>
								<Grid item md={6}>
									<Card>
										<CardMedia
											component='img'
											height='310'
											image={img03}
											alt='green diamond'
										/>
										<CardContent>
											<Typography gutterBottom variant='h5' component='div'>
												MARINA SUITES
											</Typography>
											<Typography variant='body2' color='text.secondary'>
												Green Diamond Hạ Long là dự án căn hộ chung cư cao cấp
												và liền kề shophouse của chủ đầu tư Công ty cổ phần Đầu
												tư và Phát triển nhà số 6 Hạ Long – Handico 6.
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

export default Nhatrang;
