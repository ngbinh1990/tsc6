import React, { useState } from 'react';

import {
	Avatar,
	Box,
	Divider,
	List,
	ListItemButton,
	ListItemText,
	Stack,
	TextField,
	Typography,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

import en from '../../assets/img/en.jpg';
import vn from '../../assets/img/vi.jpg';
import logo from '../../assets/img/logo.png';

import { Link } from 'react-router-dom';

import './Header.css';

const CustomLink = styled(Link)`
	text-decoration: none;
`;

const Header = () => {
	const [openListIntro, setOpenListIntro] = useState(false);
	const [openListProject, setOpenListProject] = useState(false);
	const [openListService, setOpenListService] = useState(false);
	return (
		<>
			<Box className='intro'>
				<Typography color={'white'}>Thông báo</Typography>
				<Divider
					orientation='vertical'
					flexItem
					color={'white'}
					sx={{ marginLeft: '20px', height: '20px', marginTop: '7px' }}
				/>
				<Typography color={'white'} sx={{ marginLeft: '20px' }}>
					Tuyển dụng
				</Typography>
				<ListItemButton
					sx={{ flexGrow: '0', height: '20px', marginLeft: '20px' }}>
					<Avatar
						alt='vi'
						src={`${vn}`}
						variant='square'
						sx={{ width: '30px', height: '20px' }}
					/>
				</ListItemButton>
				<ListItemButton
					sx={{
						flexGrow: '0',
						height: '20px',
						marginRight: '80px',
					}}>
					<Avatar
						alt='en'
						src={`${en}`}
						variant='square'
						sx={{ width: '30px', height: '20px' }}
					/>
				</ListItemButton>
			</Box>
			<Box className='companyLogo'>
				<Box>
					<ListItemButton
						sx={{
							flexGrow: '0',
							height: '70px',
							marginLeft: '200px',
							width: '770px',
						}}>
						<Avatar
							alt='vi'
							src={`${logo}`}
							variant='square'
							sx={{ width: '80px', height: '50px', marginRight: '20px' }}
						/>
						<Stack direction={'column'}>
							<ListItemText
								primary='CÔNG TY CỔ PHẦN DỊCH VỤ THƯƠNG MẠI VÀ SÀN BĐS HANDICO6'
								sx={{
									color: '#1a47ac',
									'& .MuiTypography-root': { fontWeight: 'bold' },
								}}
							/>
							<ListItemText
								primary='Handico 6 Real Estate Transaction Center & Trading Service Joint Stock Company'
								sx={{
									color: '#1a47ac',
									'& .MuiTypography-root': { fontWeight: 'bold' },
								}}
							/>
						</Stack>
					</ListItemButton>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						position: 'relative',
					}}>
					<SearchIcon sx={{ position: 'absolute', right: '100px' }} />
					<TextField
						id='search-top'
						label='Tìm kiếm ...'
						variant='outlined'
						sx={{
							marginRight: '100px',
							width: '250px',
							'& .MuiInputBase-input': {
								padding: '2px',
							},
							'& .MuiInputLabel-root': {
								fontSize: '0.8rem',
								top: '-12px',
							},
							'& .MuiInputLabel-root.Mui-focused': {
								top: '0px',
							},
						}}
					/>
				</Box>
			</Box>
			<Box className='menubar'>
				<List
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-start',
						alignItems: 'center',
						maxWidth: '1200px',
						height: '100%',
						marginLeft: 'auto',
						marginRight: 'auto',
						paddingLeft: '100px',
						paddingTop: '0px',
						paddingBottom: '0px',
					}}>
					<CustomLink to='/'>
						<ListItemButton
							sx={{
								width: '120px',
								color: '#1a47ac',
								'& .MuiTypography-root': {
									fontWeight: 'bold',
									fontSize: '0.9rem',
								},
								'&:hover': {
									backgroundImage:
										'linear-gradient(#d3d3d3,#d8d8d8,#dcdcdc,#e0e0e0,#e8e8e8,#f0f0f0,#f5f5f5,#f8f8f8,#ffffff)',
									'.MuiTypography-root': {
										color: '#f97305',
									},
								},
								flexGrow: '0',
								borderRight: 'solid 1px #e3e9ed',
							}}>
							<ListItemText
								primary='TRANG CHỦ'
								sx={{ textAlign: 'center', color: '#1a47ac' }}
							/>
						</ListItemButton>
					</CustomLink>
					<Box
						sx={{ position: 'relative' }}
						onMouseEnter={e => {
							setOpenListIntro(true);
						}}
						onMouseLeave={e => {
							setOpenListIntro(false);
						}}>
						<CustomLink to='gioi-thieu'>
							<ListItemButton
								sx={{
									width: '120px',
									color: '#1a47ac',
									'& .MuiTypography-root': {
										fontWeight: 'bold',
										fontSize: '0.9rem',
									},
									'&:hover': {
										backgroundImage:
											'linear-gradient(#d3d3d3,#d8d8d8,#dcdcdc,#e0e0e0,#e8e8e8,#f0f0f0,#f5f5f5,#f8f8f8,#ffffff)',
										'.MuiTypography-root': {
											color: '#f97305',
										},
									},
									flexGrow: '0',
									borderRight: 'solid 1px #e3e9ed',
								}}>
								<ListItemText
									primary='GIỚI THIỆU'
									sx={{ textAlign: 'center' }}
								/>
							</ListItemButton>
						</CustomLink>
						{openListIntro && (
							<Box
								sx={{
									position: 'absolute',
									width: '200px',
								}}>
								<CustomLink to='gioi-thieu/about'>
									<ListItemButton
										sx={{
											backgroundImage:
												'linear-gradient(#ffffff,#f8f8f8,#f5f5f5,#f0f0f0,#e8e8e8,#e0e0e0,#dcdcdc,#d8d8d8,#d3d3d3)',

											color: '#1a47ac',
											'& .MuiTypography-root': {
												fontWeight: 'bold',
												fontSize: '0.9rem',
											},
											'&:hover': {
												backgroundImage:
													'linear-gradient(#d3d3d3,#d8d8d8,#dcdcdc,#e0e0e0,#e8e8e8,#f0f0f0,#f5f5f5,#f8f8f8,#ffffff)',
												'.MuiTypography-root': {
													color: '#f97305',
												},
											},
											flexGrow: '0',
											borderRight: 'solid 1px #e3e9ed',
											borderBottom: 'solid 1px #1a47ac',
											width: '100%',
										}}>
										<ListItemText
											primary='VỀ CÔNG TY TSC6'
											sx={{ textAlign: 'left' }}
										/>
									</ListItemButton>
								</CustomLink>
								<CustomLink to='gioi-thieu/vission'>
									<ListItemButton
										sx={{
											backgroundImage:
												'linear-gradient(#ffffff,#f8f8f8,#f5f5f5,#f0f0f0,#e8e8e8,#e0e0e0,#dcdcdc,#d8d8d8,#d3d3d3)',

											color: '#1a47ac',
											'& .MuiTypography-root': {
												fontWeight: 'bold',
												fontSize: '0.9rem',
											},
											'&:hover': {
												backgroundImage:
													'linear-gradient(#d3d3d3,#d8d8d8,#dcdcdc,#e0e0e0,#e8e8e8,#f0f0f0,#f5f5f5,#f8f8f8,#ffffff)',
												'.MuiTypography-root': {
													color: '#f97305',
												},
											},
											flexGrow: '0',
											borderRight: 'solid 1px #e3e9ed',
											borderBottom: 'solid 1px #1a47ac',
											width: '100%',
										}}>
										<ListItemText
											primary='TẦM NHÌN - SỨ MỆNH'
											sx={{ textAlign: 'left' }}
										/>
									</ListItemButton>
								</CustomLink>
								<CustomLink to='gioi-thieu/product'>
									<ListItemButton
										sx={{
											backgroundImage:
												'linear-gradient(#ffffff,#f8f8f8,#f5f5f5,#f0f0f0,#e8e8e8,#e0e0e0,#dcdcdc,#d8d8d8,#d3d3d3)',

											color: '#1a47ac',
											'& .MuiTypography-root': {
												fontWeight: 'bold',
												fontSize: '0.9rem',
											},
											'&:hover': {
												backgroundImage:
													'linear-gradient(#d3d3d3,#d8d8d8,#dcdcdc,#e0e0e0,#e8e8e8,#f0f0f0,#f5f5f5,#f8f8f8,#ffffff)',
												'.MuiTypography-root': {
													color: '#f97305',
												},
											},
											flexGrow: '0',
											borderRight: 'solid 1px #e3e9ed',
											borderBottom: 'solid 1px #1a47ac',
											width: '100%',
										}}>
										<ListItemText
											primary='LĨNH VỰC HOẠT ĐỘNG'
											sx={{ textAlign: 'left' }}
										/>
									</ListItemButton>
								</CustomLink>
								<CustomLink to='gioi-thieu/person'>
									<ListItemButton
										sx={{
											backgroundImage:
												'linear-gradient(#ffffff,#f8f8f8,#f5f5f5,#f0f0f0,#e8e8e8,#e0e0e0,#dcdcdc,#d8d8d8,#d3d3d3)',

											color: '#1a47ac',
											'& .MuiTypography-root': {
												fontWeight: 'bold',
												fontSize: '0.9rem',
											},
											'&:hover': {
												backgroundImage:
													'linear-gradient(#d3d3d3,#d8d8d8,#dcdcdc,#e0e0e0,#e8e8e8,#f0f0f0,#f5f5f5,#f8f8f8,#ffffff)',
												'.MuiTypography-root': {
													color: '#f97305',
												},
											},
											flexGrow: '0',
											borderRight: 'solid 1px #e3e9ed',
											borderBottom: 'solid 1px #1a47ac',
											width: '100%',
										}}>
										<ListItemText
											primary='NĂNG LỰC NHÂN SỰ'
											sx={{ textAlign: 'left' }}
										/>
									</ListItemButton>
								</CustomLink>
							</Box>
						)}
					</Box>
					<Box
						sx={{ position: 'relative' }}
						onMouseEnter={e => {
							setOpenListProject(true);
						}}
						onMouseLeave={e => {
							setOpenListProject(false);
						}}>
						<CustomLink to='du-an'>
							<ListItemButton
								sx={{
									width: '120px',
									color: '#1a47ac',
									'& .MuiTypography-root': {
										fontWeight: 'bold',
										fontSize: '0.9rem',
									},
									'&:hover': {
										backgroundImage:
											'linear-gradient(#d3d3d3,#d8d8d8,#dcdcdc,#e0e0e0,#e8e8e8,#f0f0f0,#f5f5f5,#f8f8f8,#ffffff)',
										'.MuiTypography-root': {
											color: '#f97305',
										},
									},
									flexGrow: '0',
									borderRight: 'solid 1px #e3e9ed',
								}}>
								<ListItemText primary='DỰ ÁN' sx={{ textAlign: 'center' }} />
							</ListItemButton>
						</CustomLink>
						{openListProject && (
							<Box
								sx={{
									position: 'absolute',
									width: '200px',
								}}>
								<CustomLink to='du-an/ha-noi'>
									<ListItemButton
										sx={{
											backgroundImage:
												'linear-gradient(#ffffff,#f8f8f8,#f5f5f5,#f0f0f0,#e8e8e8,#e0e0e0,#dcdcdc,#d8d8d8,#d3d3d3)',

											color: '#1a47ac',
											'& .MuiTypography-root': {
												fontWeight: 'bold',
												fontSize: '0.9rem',
											},
											'&:hover': {
												backgroundImage:
													'linear-gradient(#d3d3d3,#d8d8d8,#dcdcdc,#e0e0e0,#e8e8e8,#f0f0f0,#f5f5f5,#f8f8f8,#ffffff)',
												'.MuiTypography-root': {
													color: '#f97305',
												},
											},
											flexGrow: '0',
											borderRight: 'solid 1px #e3e9ed',
											borderBottom: 'solid 1px #1a47ac',
											width: '100%',
										}}>
										<ListItemText primary='HÀ NỘI' sx={{ textAlign: 'left' }} />
									</ListItemButton>
								</CustomLink>
								<CustomLink to='du-an/quang-ninh'>
									<ListItemButton
										sx={{
											backgroundImage:
												'linear-gradient(#ffffff,#f8f8f8,#f5f5f5,#f0f0f0,#e8e8e8,#e0e0e0,#dcdcdc,#d8d8d8,#d3d3d3)',

											color: '#1a47ac',
											'& .MuiTypography-root': {
												fontWeight: 'bold',
												fontSize: '0.9rem',
											},
											'&:hover': {
												backgroundImage:
													'linear-gradient(#d3d3d3,#d8d8d8,#dcdcdc,#e0e0e0,#e8e8e8,#f0f0f0,#f5f5f5,#f8f8f8,#ffffff)',
												'.MuiTypography-root': {
													color: '#f97305',
												},
											},
											flexGrow: '0',
											borderRight: 'solid 1px #e3e9ed',
											borderBottom: 'solid 1px #1a47ac',
											width: '100%',
										}}>
										<ListItemText
											primary='QUẢNG NINH'
											sx={{ textAlign: 'left' }}
										/>
									</ListItemButton>
								</CustomLink>
								<CustomLink to='du-an/nha-trang'>
									<ListItemButton
										sx={{
											backgroundImage:
												'linear-gradient(#ffffff,#f8f8f8,#f5f5f5,#f0f0f0,#e8e8e8,#e0e0e0,#dcdcdc,#d8d8d8,#d3d3d3)',

											color: '#1a47ac',
											'& .MuiTypography-root': {
												fontWeight: 'bold',
												fontSize: '0.9rem',
											},
											'&:hover': {
												backgroundImage:
													'linear-gradient(#d3d3d3,#d8d8d8,#dcdcdc,#e0e0e0,#e8e8e8,#f0f0f0,#f5f5f5,#f8f8f8,#ffffff)',
												'.MuiTypography-root': {
													color: '#f97305',
												},
											},
											flexGrow: '0',
											borderRight: 'solid 1px #e3e9ed',
											borderBottom: 'solid 1px #1a47ac',
											width: '100%',
										}}>
										<ListItemText
											primary='NHA TRANG'
											sx={{ textAlign: 'left' }}
										/>
									</ListItemButton>
								</CustomLink>
							</Box>
						)}
					</Box>
					<Box
						sx={{ position: 'relative' }}
						onMouseEnter={e => {
							setOpenListService(true);
						}}
						onMouseLeave={e => {
							setOpenListService(false);
						}}>
						<CustomLink to='dich-vu'>
							<ListItemButton
								sx={{
									width: '120px',
									color: '#1a47ac',
									'& .MuiTypography-root': {
										fontWeight: 'bold',
										fontSize: '0.9rem',
									},
									'&:hover': {
										backgroundImage:
											'linear-gradient(#d3d3d3,#d8d8d8,#dcdcdc,#e0e0e0,#e8e8e8,#f0f0f0,#f5f5f5,#f8f8f8,#ffffff)',
										'.MuiTypography-root': {
											color: '#f97305',
										},
									},
									flexGrow: '0',
									borderRight: 'solid 1px #e3e9ed',
								}}>
								<ListItemText primary='DỊCH VỤ' sx={{ textAlign: 'center' }} />
							</ListItemButton>
						</CustomLink>
						{openListService && (
							<Box
								sx={{
									position: 'absolute',
									width: '200px',
								}}>
								<CustomLink to='dich-vu/quan-ly-chung-cu'>
									<ListItemButton
										sx={{
											backgroundImage:
												'linear-gradient(#ffffff,#f8f8f8,#f5f5f5,#f0f0f0,#e8e8e8,#e0e0e0,#dcdcdc,#d8d8d8,#d3d3d3)',

											color: '#1a47ac',
											'& .MuiTypography-root': {
												fontWeight: 'bold',
												fontSize: '0.9rem',
											},
											'&:hover': {
												backgroundImage:
													'linear-gradient(#d3d3d3,#d8d8d8,#dcdcdc,#e0e0e0,#e8e8e8,#f0f0f0,#f5f5f5,#f8f8f8,#ffffff)',
												'.MuiTypography-root': {
													color: '#f97305',
												},
											},
											flexGrow: '0',
											borderRight: 'solid 1px #e3e9ed',
											borderBottom: 'solid 1px #1a47ac',
											width: '100%',
										}}>
										<ListItemText
											primary='QUẢN LÝ CHUNG CƯ'
											sx={{ textAlign: 'left' }}
										/>
									</ListItemButton>
								</CustomLink>
								<CustomLink to='dich-vu/quan-ly-van-phong'>
									<ListItemButton
										sx={{
											backgroundImage:
												'linear-gradient(#ffffff,#f8f8f8,#f5f5f5,#f0f0f0,#e8e8e8,#e0e0e0,#dcdcdc,#d8d8d8,#d3d3d3)',

											color: '#1a47ac',
											'& .MuiTypography-root': {
												fontWeight: 'bold',
												fontSize: '0.9rem',
											},
											'&:hover': {
												backgroundImage:
													'linear-gradient(#d3d3d3,#d8d8d8,#dcdcdc,#e0e0e0,#e8e8e8,#f0f0f0,#f5f5f5,#f8f8f8,#ffffff)',
												'.MuiTypography-root': {
													color: '#f97305',
												},
											},
											flexGrow: '0',
											borderRight: 'solid 1px #e3e9ed',
											borderBottom: 'solid 1px #1a47ac',
											width: '100%',
										}}>
										<ListItemText
											primary='QUẢN LÝ VĂN PHÒNG'
											sx={{ textAlign: 'left' }}
										/>
									</ListItemButton>
								</CustomLink>
								<CustomLink to='dich-vu/quan-ly-bds-khac'>
									<ListItemButton
										sx={{
											backgroundImage:
												'linear-gradient(#ffffff,#f8f8f8,#f5f5f5,#f0f0f0,#e8e8e8,#e0e0e0,#dcdcdc,#d8d8d8,#d3d3d3)',

											color: '#1a47ac',
											'& .MuiTypography-root': {
												fontWeight: 'bold',
												fontSize: '0.9rem',
											},
											'&:hover': {
												backgroundImage:
													'linear-gradient(#d3d3d3,#d8d8d8,#dcdcdc,#e0e0e0,#e8e8e8,#f0f0f0,#f5f5f5,#f8f8f8,#ffffff)',
												'.MuiTypography-root': {
													color: '#f97305',
												},
											},
											flexGrow: '0',
											borderRight: 'solid 1px #e3e9ed',
											borderBottom: 'solid 1px #1a47ac',
											width: '100%',
										}}>
										<ListItemText
											primary='QUẢN LÝ BĐS KHÁC'
											sx={{ textAlign: 'left' }}
										/>
									</ListItemButton>
								</CustomLink>
							</Box>
						)}
					</Box>
					<ListItemButton
						sx={{
							width: '120px',
							color: '#1a47ac',
							'& .MuiTypography-root': {
								fontWeight: 'bold',
								fontSize: '0.9rem',
							},
							'&:hover': {
								backgroundImage:
									'linear-gradient(#d3d3d3,#d8d8d8,#dcdcdc,#e0e0e0,#e8e8e8,#f0f0f0,#f5f5f5,#f8f8f8,#ffffff)',
								'.MuiTypography-root': {
									color: '#f97305',
								},
							},
							flexGrow: '0',
							borderRight: 'solid 1px #e3e9ed',
						}}>
						<ListItemText primary='TIN TỨC' sx={{ textAlign: 'center' }} />
					</ListItemButton>
					<ListItemButton
						sx={{
							width: '120px',
							color: '#1a47ac',
							'& .MuiTypography-root': {
								fontWeight: 'bold',
								fontSize: '0.9rem',
							},
							'&:hover': {
								backgroundImage:
									'linear-gradient(#d3d3d3,#d8d8d8,#dcdcdc,#e0e0e0,#e8e8e8,#f0f0f0,#f5f5f5,#f8f8f8,#ffffff)',
								'.MuiTypography-root': {
									color: '#f97305',
								},
							},
							flexGrow: '0',
							borderRight: 'solid 1px #e3e9ed',
						}}>
						<ListItemText primary='LIÊN HỆ' sx={{ textAlign: 'center' }} />
					</ListItemButton>
				</List>
			</Box>
		</>
	);
};

export default Header;
